"use client";
import { useAuth } from "../libs/useAuth"; // tanpa alias: ganti dengan "../libs/useAuth"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ModulList from "./ModulList";

export default function ModulsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // balikin kalau belum login
    }
  }, [user, loading, router]);

  if (loading) return null; // atau tampilkan loader

  return <ModulList />;
}
