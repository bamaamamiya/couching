"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../libs/supabase-browser";

export default function DashboardReviewer() {
  const router = useRouter();
  const [leads, setLeads] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [lengthFilter, setLengthFilter] = useState("all");
  const [umurFilter, setUmurFilter] = useState("all");
  const [selectedLead, setSelectedLead] = useState(null);

  const closeModal = () => setSelectedLead(null);
  const getReasonLength = (alasan) => (alasan ? alasan.length : 0);

  // ✅ Cek sesi login
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session?.user) {
        router.replace("/admin");
      } else {
        console.log("🚀 Masuk ke halaman SELECT");
      }
    };
    checkSession();
  }, []);

  // ✅ Fetch dan realtime listener
  useEffect(() => {
    let channel;

    const fetchAndListen = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) return;

      // Initial fetch
      const { data, error } = await supabase
        .from("leadmagnet")
        .select("*")
        .order("id", { ascending: false });

      if (!error) {
        setLeads(data);
      }

      // ✅ Realtime setup
      channel = supabase
        .channel("realtime:leadmagnet")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "leadmagnet" },
          (payload) => {
            console.log("📡 Change received:", payload);
            const { eventType, new: newData, old } = payload;

            if (eventType === "INSERT") {
              setLeads((prev) => [newData, ...prev]);
            } else if (eventType === "UPDATE") {
              setLeads((prev) =>
                prev.map((l) => (l.id === newData.id ? newData : l))
              );
            } else if (eventType === "DELETE") {
              setLeads((prev) => prev.filter((l) => l.id !== old.id));
            }
          }
        )
        .subscribe();
    };

    fetchAndListen();

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, []);

  // ✅ Update status dengan UI langsung berubah
  async function updateStatus(id, status) {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
    const { error } = await supabase
      .from("leadmagnet")
      .update({ status })
      .eq("id", id);
    if (error) console.error("Error updating status:", error);
  }

  // ✅ Delete lead
  async function deleteLead(id) {
    if (!confirm("Yakin mau hapus data ini?")) return;
    const { error } = await supabase.from("leadmagnet").delete().eq("id", id);
    if (error) console.error("Error deleting lead:", error);
  }

  // ✅ Filter
  const filteredLeads = leads.filter((lead) => {
    const matchStatus =
      statusFilter === "all" || (lead.status || "pending") === statusFilter;
    const matchUmur =
      umurFilter === "all" ||
      (umurFilter === "20s" && lead.umur >= 20 && lead.umur <= 29) ||
      (umurFilter === "30s" && lead.umur >= 30 && lead.umur <= 39);
    const reasonLength = getReasonLength(lead.alasan);
    const matchLength =
      lengthFilter === "all" ||
      (lengthFilter === "short" && reasonLength <= 80) ||
      (lengthFilter === "long" && reasonLength > 80);
    return matchStatus && matchLength && matchUmur;
  });

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-10 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        📋 Dashboard Seleksi Peserta
      </h1>

      {/* Filter */}
      <div className="flex flex-wrap gap-3 mb-6 justify-between items-center text-sm">
        <div className="flex gap-3 overflow-x-auto max-w-full">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-zinc-800 text-white p-2 rounded border border-zinc-700"
          >
            <option value="all">Semua Status</option>
            <option value="pending">Pending</option>
            <option value="selected">Terpilih</option>
            <option value="not_selected">Ditolak</option>
          </select>
          <select
            value={lengthFilter}
            onChange={(e) => setLengthFilter(e.target.value)}
            className="bg-zinc-800 text-white p-2 rounded border border-zinc-700"
          >
            <option value="all">Semua Alasan</option>
            <option value="short">Alasan Pendek (≤80)</option>
            <option value="long">Alasan Panjang (&gt;80)</option>
          </select>
          <select
            value={umurFilter}
            onChange={(e) => setUmurFilter(e.target.value)}
            className="bg-zinc-800 text-white p-2 rounded border border-zinc-700"
          >
            <option value="all">Semua Umur</option>
            <option value="20s">20-an</option>
            <option value="30s">30-an</option>
          </select>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm">
          Total: <strong>{filteredLeads.length}</strong> pendaftar
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-zinc-900 border border-zinc-700 rounded-xl">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-zinc-800 text-gray-300 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Nama</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">WA</th>
              <th className="px-4 py-3">Alasan</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr
                key={lead.id}
                className="border-t border-zinc-700 hover:bg-zinc-800/50 cursor-pointer transition"
              >
                <td className="px-4 py-2">{lead.nama}</td>
                <td className="px-4 py-2">{lead.email}</td>
                <td className="px-4 py-2 text-xs">{lead.wa}</td>
                <td className="px-4 py-2 text-sm text-gray-300">
                  {lead.alasan?.length > 80
                    ? lead.alasan.slice(0, 80) + "..."
                    : lead.alasan}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`uppercase font-bold ${
                      lead.status === "selected"
                        ? "text-green-400"
                        : lead.status === "not_selected"
                        ? "text-red-400"
                        : "text-yellow-300"
                    }`}
                  >
                    {lead.status || "PENDING"}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2 flex">
                  <button
                    onClick={() => updateStatus(lead.id, "selected")}
                    className="bg-green-500 text-black px-2 py-1 rounded text-xs hover:opacity-80"
                  >
                    Pilih
                  </button>
                  <button
                    onClick={() => updateStatus(lead.id, "not_selected")}
                    className="bg-red-500 text-black px-2 py-1 rounded text-xs hover:opacity-80"
                  >
                    Tolak
                  </button>
                  <button
                    onClick={() => deleteLead(lead.id)}
                    className="bg-red-700 text-white px-2 py-1 rounded text-xs hover:opacity-80"
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-zinc-900 text-white p-6 rounded-2xl max-w-md w-full relative border border-zinc-700">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Detail Lead
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Nama:</strong> {selectedLead.nama}
              </p>
              <p>
                <strong>Email:</strong> {selectedLead.email}
              </p>
              <p>
                <strong>WhatsApp:</strong> {selectedLead.wa}
              </p>
              <p>
                <strong>Umur:</strong> {selectedLead.umur || "-"}
              </p>
              <p>
                <strong>Alasan:</strong> {selectedLead.alasan}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-bold ${
                    selectedLead.status === "selected"
                      ? "text-green-400"
                      : selectedLead.status === "not_selected"
                      ? "text-red-400"
                      : "text-yellow-300"
                  }`}
                >
                  {selectedLead.status || "PENDING"}
                </span>
              </p>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => {
                  updateStatus(selectedLead.id, "selected");
                  closeModal();
                }}
                className="bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded text-sm font-semibold"
              >
                ✅ Pilih
              </button>
              <button
                onClick={() => {
                  updateStatus(selectedLead.id, "not_selected");
                  closeModal();
                }}
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded text-sm font-semibold"
              >
                ❌ Tolak
              </button>
              <button
                onClick={() => {
                  deleteLead(selectedLead.id);
                  closeModal();
                }}
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded text-sm font-semibold"
              >
                🗑️ Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
