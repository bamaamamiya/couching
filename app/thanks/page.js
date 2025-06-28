export default function Thanks() {
  return (
    <section className="bg-black text-white h-screen flex items-center justify-center">
      <div className="text-center space-y-6 max-w-xl px-6">
        <h1 className="text-3xl font-bold">🎉 Terima kasih!</h1>
        <p className="text-gray-300">
          Terima kasih! Pembayaranmu sedang diproses. Tim kami akan menghubungi
          kamu melalui WhatsApp dan email dalam waktu maksimal 1x24 jam.
        </p>

        <div className="mt-6">
          <a
            href="https://discord.gg/HGbCwWFkEk" // ganti dengan link Discord kamu
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-semibold px-5 py-3 rounded-xl hover:bg-gray-200 transition"
          >
            🚀 Join Komunitas Discord Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
