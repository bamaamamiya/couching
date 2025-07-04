"use client";
// select/page.jsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "../libs/supabase";

export default function DashboardReviewer() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        router.replace("/admin"); // kalau belum login, balikin ke login
      } else {
        console.log("🚀 Masuk ke halaman SELECT");
      }
    };

    checkSession();
  }, []);

  const [leads, setLeads] = useState([]);
  // Tambahkan di atas komponen utama
  const getReasonLength = (alasan) => (alasan ? alasan.length : 0);
  const [statusFilter, setStatusFilter] = useState("all");
  const [lengthFilter, setLengthFilter] = useState("all");
  const [umurFilter, setUmurFilter] = useState("all");
  // Filter leads
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

  useEffect(() => {
  const fetchData = async () => {
    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData.session) {
      console.warn("❌ No session found");
      return;
    }

    const { data, error } = await supabase
      .from("leadmagnet")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Error fetching leads:", error);
    } else {
      console.log("Fetched leads:", data);
      setLeads(data);
    }
  };

  fetchData();
}, []);


  const updateStatus = async (id, status) => {
    const { error } = await supabase
      .from("leadmagnet")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Error updating status:", error);
    }
  };

  const deleteLead = async (id) => {
    if (confirm("Yakin mau hapus data ini?")) {
      const { error } = await supabase.from("leadmagnet").delete().eq("id", id);

      if (error) {
        console.error("Error deleting lead:", error);
      }
    }
  };

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

      {/* Mobile (card style) */}
      <div className="md:hidden space-y-4">
        {filteredLeads.map((lead) => (
          <div
            key={lead.id}
            className="bg-zinc-900 border border-zinc-700 p-4 rounded-xl space-y-1"
          >
            <p>
              <strong>Nama:</strong> {lead.nama}
            </p>
            <p>
              <strong>Email:</strong> {lead.email}
            </p>
            <p>
              <strong>WA:</strong> {lead.wa}
            </p>
            <p>
              <strong>Alasan:</strong>{" "}
              <span className="text-gray-300">
                {lead.alasan?.slice(0, 100)}
                {lead.alasan?.length > 100 ? "..." : ""}
              </span>
            </p>
            <p>
              <strong>Status:</strong>{" "}
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
            </p>
            <div className="flex gap-2 pt-2 flex-wrap">
              <button
                onClick={() => updateStatus(lead.id, "selected")}
                className="bg-green-500 text-black px-3 py-1 rounded text-xs hover:opacity-80"
              >
                Pilih
              </button>
              <button
                onClick={() => updateStatus(lead.id, "not_selected")}
                className="bg-red-500 text-black px-3 py-1 rounded text-xs hover:opacity-80"
              >
                Tolak
              </button>
              <button
                onClick={() => deleteLead(lead.id)}
                className="bg-red-700 text-white px-3 py-1 rounded text-xs hover:opacity-80"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-zinc-900 border border-zinc-700 rounded-xl">
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
                className="border-t border-zinc-700 hover:bg-zinc-800/50"
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
                <td className="px-4 py-2 space-x-2">
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

      {leads.length === 0 && (
        <p className="text-center py-8 text-gray-400">
          Belum ada data pendaftar.
        </p>
      )}
    </div>
  );
}
