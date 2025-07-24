"use client";

import React, { useEffect, useState } from "react";

export default function Waiting({ totalWaiting = 17 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = totalWaiting;
    const duration = 800;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, stepTime);

    return () => clearInterval(counter);
  }, [totalWaiting]);

  return (
    <section className="bg-black text-white h-screen flex items-center justify-center">
      <div className="text-center space-y-6 max-w-xl px-6">
        <h1 className="text-4xl font-bold">📮 Kamu Masuk Daftar Tunggu</h1>
        <p className="text-gray-300 text-lg">
          Saat ini slot coaching udah full.
          Tapi karena kamu udah daftar, kamu masuk list orang yang bakal dikabarin duluan pas slot dibuka lagi.
        </p>

        <div className="text-yellow-300 text-5xl font-bold mt-4">
          {count}
        </div>
        <p className="text-gray-400 text-sm -mt-2">orang lagi nunggu giliran</p>

        <p className="text-gray-500 text-sm italic">
          Gue nggak bisa janji kapan, tapi...
          <br />
          yang sabar, pasti dapet giliran.
        </p>

        <a
          href="https://discord.gg/HGbCwWFkEk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-semibold px-5 py-3 rounded-xl hover:bg-gray-200 transition mt-4"
        >
          🚀 Join Komunitas Discord 
        </a>
      </div>
    </section>
  );
}
