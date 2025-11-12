"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const questions = [
  {
    id: "instagram",
    label:
      "Masukin username Instagram brand kamu biar tim kami bisa lihat profil kamu.",
    type: "text",
    placeholder: "@nama_brand",
  },
  {
    id: "business_name",
    label:
      "Masukin nama bisnis kamu biar tim kami bisa lihat profil kamu.",
    type: "text",
    placeholder: "Nama Bisnis",
  },
  {
    id: "whatsapp",
    label:
      "Nomor WhatsApp aktif kamu biar tim bisa follow up hasil review-nya.",
    type: "text",
    placeholder: "+62...",
  },
  {
    id: "product",
    label: "Ceritain singkat tentang produk utama yang kamu jual.",
    type: "textarea",
  },
  {
    id: "audience",
    label: "Biasanya siapa yang paling sering beli produk kamu?",
    type: "select",
    options: ["Remaja", "Dewasa muda", "Keluarga", "Profesional", "Lainnya"],
  },
  {
    id: "usia perusahaan",
    label: "Usia Perusahaan",
    type: "select",
    options: ["1 Tahun", "2 Tahun", "3 Tahun", "4 Tahun", "> 5 Tahun"],
  },
  {
    id: "experience",
    label: "Kamu udah pernah jalanin iklan Facebook / Instagram sebelumnya?",
    type: "select",
    options: [
      "Belum pernah",
      "Sudah tapi belum maksimal",
      "Sudah dan hasilnya bagus",
    ],
  },
  {
    id: "omset",
    label: "Berapa omset per bulan",
    type: "select",
    options: [
      "1 juta - 5 juta",
      "5 juta - 20 juta",
      "25 juta - 40 juta",
      "50 juta - 100 juta",
      "100 juta - 300 juta",
      "300 juta - 500 juta",
      "500 juta - 1 Milyar",
    ],
  },
  {
    id: "karyawan",
    label: "Berapa jumlah karyawan?",
    type: "select",
    options: [
      "1 - 10 orang",
      "10 - 50 orang",
      "50 - 100 orang",
      "100 - 1000 orang",
    ],
  },
  {
    id: "budget",
    label: "Berapa kisaran budget iklan per bulan yang kamu siapin sekarang?",
    type: "select",
    options: ["< 1 juta", "1–7 juta", "8–10 juta", "> 10 juta"],
  },
  {
    id: "goal",
    label: "Apa yang paling kamu pengen capai dari kerja sama ini?",
    type: "select",
    options: [
      "Naik penjualan",
      "Bangun brand awareness",
      "Uji produk baru",
      "Optimasi iklan lama",
    ],
  },
  {
    id: "problem",
    label: "Kendala utama yang kamu hadapi sekarang apa?",
    type: "textarea",
  },
];

export default function ApplyForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const cleanWhatsapp = (input) => {
    if (!input) return "";
    let number = input.replace(/[\s-]/g, "");
    if (number.startsWith("0")) number = "+62" + number.slice(1);
    else if (number.startsWith("62")) number = "+" + number;
    else if (!number.startsWith("+62")) number = "+62" + number;
    return number;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [questions[step].id]: e.target.value });
  };

  const nextStep = async () => {
    const currentQuestion = questions[step];
    const currentValue = formData[currentQuestion.id];

    // ✅ Validasi input kosong
    if (!currentValue || currentValue.trim() === "") {
      setShowPopup(true);
      return;
    }

    // ✅ Jika belum step terakhir, lanjut
    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }

    // ✅ Step terakhir: kirim data ke Supabase
    setLoading(true);
    const payload = {
      instagram_handle: formData.instagram,
      whatsapp_number: cleanWhatsapp(formData.whatsapp),
      product_description: formData.product,
      business_category: formData.audience,
      business_age: formData["usia perusahaan"],
      ad_experience: formData.experience,
      monthly_revenue: formData.omset,
      employee_count: formData.karyawan,
      ad_budget: formData.budget,
      goal: formData.goal,
      main_problem: formData.problem,
      business_name: null,
      created_at: new Date().toISOString(),
    };

    const { error } = await supabase.from("agency").insert([payload]);
    setLoading(false);

    if (error) {
      console.error("❌ Gagal kirim ke Supabase:", error.message);
      alert("Terjadi kesalahan saat mengirim data. Coba lagi nanti.");
      return;
    }

    // ✅ Kalau sukses
    setSubmitted(true);
  };

  const prevStep = () => setStep(step - 1);

  // ENTER = NEXT
  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        nextStep();
      }
    };
    window.addEventListener("keydown", handleEnter);
    return () => window.removeEventListener("keydown", handleEnter);
  });

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.05,
        }}
      ></div>

      <div className="relative z-10 bg-gray-900/60 backdrop-blur-lg p-8 rounded-2xl max-w-lg w-full border border-gray-800 shadow-xl">
        {!submitted ? (
          <>
            <div className="w-full bg-gray-800 h-2 rounded-full mb-6">
              <div
                className="bg-white h-2 rounded-full transition-all duration-500"
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg font-medium mb-4">
                  {questions[step].label}
                </p>

                {questions[step].type === "text" && (
                  <input
                    type="text"
                    value={formData[questions[step].id] || ""}
                    onChange={handleChange}
                    placeholder={questions[step].placeholder}
                    className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-white transition"
                  />
                )}

                {questions[step].type === "textarea" && (
                  <textarea
                    value={formData[questions[step].id] || ""}
                    onChange={handleChange}
                    placeholder="Tulis di sini..."
                    className="w-full bg-transparent border border-gray-700 rounded-lg p-3 h-28 resize-none focus:outline-none focus:border-white transition"
                  ></textarea>
                )}

                {questions[step].type === "select" && (
                  <select
                    value={formData[questions[step].id] || ""}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-white transition"
                  >
                    <option value="">Pilih salah satu...</option>
                    {questions[step].options.map((opt, i) => (
                      <option key={i} value={opt} className="bg-gray-900">
                        {opt}
                      </option>
                    ))}
                  </select>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              {step > 0 ? (
                <button
                  onClick={prevStep}
                  className="text-gray-400 hover:text-white transition"
                >
                  ← Sebelumnya
                </button>
              ) : (
                <div></div>
              )}

              <button
                onClick={nextStep}
                disabled={loading}
                className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-transparent hover:text-white border border-white transition-all"
              >
                {loading
                  ? "Mengirim..."
                  : step === questions.length - 1
                  ? "Kirim"
                  : "Lanjut →"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold mb-4">Terima kasih 🙌</h2>
            <p className="text-gray-400">
              Tim kami akan review data kamu dan hubungi lewat WhatsApp dalam 24
              jam.
            </p>
          </div>
        )}
      </div>

      {/* POPUP ANIMASI */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-2xl text-center max-w-sm w-full shadow-2xl">
              <p className="text-lg font-semibold mb-3 p-4">
                🚨 Isi dulu pertanyaan ini sebelum lanjut
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-transparent hover:text-white border border-white transition-all"
              >
                Oke, siap
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
