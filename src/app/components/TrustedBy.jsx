// components/TrustedBy.jsx
export default function TrustedBy() {
  return (
    <section className="bg-black text-white py-16 font-montserrat tracking-wide">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-semibold text-lg mb-10">
          See how US brands grow with our strategy.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-8">
          <span className="text-xl font-semibold opacity-80 hover:opacity-100 transition">Blue Harbor Coffee</span>
          <span className="text-2xl font-bold opacity-80 hover:opacity-100 transition">Urban Threads Co.</span>
          <span className="text-lg font-medium opacity-80 hover:opacity-100 transition">Everline Apparel</span>
          <span className="text-xl font-semibold opacity-80 hover:opacity-100 transition">Fox & Finch Goods</span>
          <span className="text-2xl font-bold opacity-80 hover:opacity-100 transition">Wild Peak Naturals</span>
          <span className="text-lg font-medium opacity-80 hover:opacity-100 transition">Craft Denim Co.</span>
          <span className="text-xl font-semibold opacity-80 hover:opacity-100 transition">Maple Grove Essentials</span>
          <span className="text-2xl font-bold opacity-80 hover:opacity-100 transition">Cozy Brew Studio</span>
        </div>

        <p className="text-sm text-gray-400">... and many more</p>
      </div>
    </section>
  )
}
