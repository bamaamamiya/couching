"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../libs/supabase-browser";

export default function DashboardReviewer() {
  const router = useRouter();
  const [leads, setLeads] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [umurFilter, setUmurFilter] = useState("all");
  const [selectedLead, setSelectedLead] = useState(null);

  const closeModal = () => setSelectedLead(null);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session?.user) router.replace("/admin");
    };
    checkSession();
  }, []);

  useEffect(() => {
    let channel;

    const fetchAndListen = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) return;

      const { data, error } = await supabase
        .from("leadmagnet")
        .select("*")
        .order("id", { ascending: false });

      if (!error) setLeads(data);

      channel = supabase
        .channel("realtime:leadmagnet")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "leadmagnet" },
          (payload) => {
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
      if (channel) supabase.removeChannel(channel);
    };
  }, []);

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

  async function deleteLead(id) {
    if (!confirm("Yakin mau hapus data ini?")) return;
    const { error } = await supabase.from("leadmagnet").delete().eq("id", id);
    if (error) console.error("Error deleting lead:", error);
  }

  const filteredLeads = leads.filter((lead) => {
    const matchStatus =
      statusFilter === "all" || (lead.paket || "") === statusFilter;
    const matchUmur =
      umurFilter === "all" ||
      (umurFilter === "20s" && lead.umur >= 20 && lead.umur <= 29) ||
      (umurFilter === "30s" && lead.umur >= 30 && lead.umur <= 39);
    return matchStatus && matchUmur;
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
            <option value="pecah-telur">Pecah Telur</option>
            <option value="naik-omset">Scale</option>
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
              <th className="px-4 py-3">Umur</th>
              <th className="px-4 py-3">Paket</th>
              <th className="px-4 py-3">Button</th>
							
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
                <td className="px-4 py-2">{lead.umur || "-"}</td>
                <td className="px-4 py-2">{lead.paket}</td>
                <td className="px-4 py-2 flex gap-2 items-center">
                  <button
                    onClick={() => deleteLead(lead.id)}
                    className="text-red-400 hover:text-red-600 text-xs underline"
                  >
                    Hapus
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
                <strong>paket:</strong> {selectedLead.paket}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
