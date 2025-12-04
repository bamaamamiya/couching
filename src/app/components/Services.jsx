import { 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Search, 
  CalendarCheck, 
  Bot, 
  Globe, 
  Boxes 
} from "lucide-react";

export default function Services() {
  return (
    <section className="bg-black text-white py-24 font-poppins">
      <div className="max-w-6xl mx-auto text-center">

        {/* TOP SECTION */}
        <p className="text-white font-semibold mb-2 tracking-wide uppercase">
          Our Core Services
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Comprehensive technology solutions designed to accelerate your business growth
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          From paid ads to automation systems, we provide a complete ecosystem to help your brand scale
          faster, smarter, and sustainably.
        </p>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* PAID ADVERTISING */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-900 p-4 rounded-xl mb-4">
              <Facebook size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-3">Paid Advertising</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Expand your reach and attract targeted customers with data-driven ad campaigns
              that convert efficiently.
            </p>
          </div>

          {/* SEO OPTIMIZATION */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-900 p-4 rounded-xl mb-4">
              <Search size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-3">SEO Optimization</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Increase your website’s visibility and generate consistent organic traffic through
              modern SEO techniques.
            </p>
          </div>

          {/* APPOINTMENT SETTING */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-900 p-4 rounded-xl mb-4">
              <CalendarCheck size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-3">Appointment Setting & Qualifying</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Streamline your sales process by booking qualified leads who are genuinely ready
              to engage with your offer.
            </p>
          </div>

          {/* AI BOTS & NURTURING */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-900 p-4 rounded-xl mb-4">
              <Bot size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-3">AI Bots & Nurturing Systems</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Automate your customer interaction, follow-ups, and lead nurturing with intelligent,
              behavior-based AI systems.
            </p>
          </div>

          {/* WEBSITE BUILDING */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-900 p-4 rounded-xl mb-4">
              <Globe size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-3">Website Building</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Build a modern, high-converting website designed to turn visitors into paying
              customers effortlessly.
            </p>
          </div>

          {/* CRM SOLUTIONS */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-900 p-4 rounded-xl mb-4">
              <Boxes size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-3">CRM Solutions</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Manage relationships, track customer data, and foster loyalty with a powerful CRM
              ecosystem tailored for growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
