// components/TrackRecord.jsx
export default function TrackRecord() {
  return (
    <section className="bg-black text-white py-24 font-poppins border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="text-white font-semibold mb-2 tracking-wide uppercase">
          Our Track Record
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Trusted by brands worldwide
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          We’ve helped businesses around the world hit their growth targets
          through data-driven digital strategies that deliver consistent and
          measurable results.
        </p>

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              $500K+
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Revenue generated for clients
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              2,000+
            </h3>
            <p className="text-gray-400 text-sm mt-2">Ad campaigns managed</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">100+</h3>
            <p className="text-gray-400 text-sm mt-2">
              Global brands partnered with us
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">5x+</h3>
            <p className="text-gray-400 text-sm mt-2">
              Average ROAS across campaigns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
