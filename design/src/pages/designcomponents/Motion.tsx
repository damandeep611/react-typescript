import { Orbit } from "lucide-react";

export default function Motion() {
  return (
    <section className="bg-gray-900 text-white h-screen overflow-hidden flex items-center">
      <OrbitalSection />
    </section>
  );
}

const OrbitalSection = () => {
  const orbitalItems = [
    { id: 1, label: "PLATFORMS", icon: "👥", orbitIndex: 1 },
    { id: 2, label: "CRMs", icon: "💼", orbitIndex: 2 },
    { id: 3, label: "COMPLIANCE", icon: "🔒", orbitIndex: 3 },
  ];

  return (
    <div className="w-full h-full container mx-auto bg-black text-white relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-12 gap-8 h-full">
        {/* Left Content Section */}
        <div className="col-span-5 py-16 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="bg-pink-500 w-12 h-12 rounded-lg flex items-center justify-center">
              <Orbit className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Yep, Fathom Supports That
            </h2>
            <p className="text-gray-400 text-xl">
              No matter the video conferencing platform, language or compliance
              requirements you have, Fathom's got you.
            </p>
            <button className="bg-purple-900 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors">
              Fathom supports 23 languages 🌐
            </button>
          </div>
        </div>

        {/* Right Orbital Section */}
        <div className="col-span-7 relative h-full">
          {/* Central hub */}
          <div className="absolute top-1/2 right-1/2 w-16 h-16 bg-white rounded-lg" />

          {/* Orbital System */}
          <div className="absolute top-1/2 right-1/2 transform">
            {[1, 2, 3].map((ring) => (
              <div
                key={ring}
                className="absolute top-0 right-0 origin-center animate-orbit"
              >
                {/* Ring */}
                <div
                  className="absolute border-2 border-gray-100 rounded-full opacity-20"
                  style={{
                    width: `${ring * 200}px`,
                    height: `${ring * 200}px`,
                    top: `${-ring * 100}px`,
                    right: `${-ring * 100}px`,
                  }}
                />
                {/* Orbital Items */}
                {orbitalItems
                  .filter((item) => item.orbitIndex === ring)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-lg"
                      style={{
                        top: `${-ring * 100}px`,
                        right: `${(ring * 200) / 2 - 24}px`, // Centered on the ring
                      }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-orbit {
          animation: orbit 20s linear infinite;
        }

        .animate-orbit:nth-child(2) {
          animation-duration: 25s;
          animation-direction: reverse;
        }

        .animate-orbit:nth-child(3) {
          animation-duration: 30s;
        }
      `}</style>
    </div>
  );
};
