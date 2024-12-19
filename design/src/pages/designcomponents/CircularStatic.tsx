import { Orbit } from "lucide-react";

export default function CircularStatic() {
  return (
    <section className="bg-gray-900 text-white h-screen overflow-hidden flex items-center">
      <OrbitalSection />
    </section>
  );
}

const OrbitalSection = () => {
  const orbitalItems = [
    { id: 1, label: "PLATFORMS", icon: "👥", radius: 290, angle: 65 },
    { id: 2, label: "CRMs", icon: "💼", radius: 470, angle: 45 },
    { id: 3, label: "COMPLIANCE", icon: "🔒", radius: 650, angle: 20 },
    // Add more items as needed
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
        <div className="col-span-7 relative">
          {/* Central hub */}
          <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-white rounded-lg transform -translate-x-32 -translate-y-32" />

          {/* Orbital rings */}
          {[1, 2, 3, 4, 5].map((ring) => (
            <div
              key={ring}
              className="absolute bottom-0 right-0 border-2 border-gray-100 rounded-full opacity-20"
              style={{
                width: `${ring * 350}px`,
                height: `${ring * 350}px`,
                transform: "translate(50%, 50%)",
                animation: `rotate${ring} ${20 + ring * 8}s linear infinite`,
              }}
            />
          ))}

          {/* Orbital items */}
          {orbitalItems.map((item) => (
            <div
              key={item.id}
              className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-lg transform -translate-x-1/2 -translate-y-1/2"
              style={{
                bottom: `${
                  Math.sin((item.angle * Math.PI) / 200) * item.radius
                }px`,
                right: `${
                  Math.cos((item.angle * Math.PI) / 180) * item.radius
                }px`,
                animation: `float ${
                  3 + item.id
                }s ease-in-out infinite alternate`,
              }}
            >
              <span className="text-2xl">{item.icon}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate1 {
          from {
            transform: translate(50%, 50%) rotate(0deg);
          }
          to {
            transform: translate(50%, 50%) rotate(360deg);
          }
        }
        @keyframes rotate2 {
          from {
            transform: translate(50%, 50%) rotate(0deg);
          }
          to {
            transform: translate(50%, 50%) rotate(-360deg);
          }
        }
        @keyframes rotate3 {
          from {
            transform: translate(50%, 50%) rotate(0deg);
          }
          to {
            transform: translate(50%, 50%) rotate(360deg);
          }
        }
        @keyframes float {
          0% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
          100% {
            transform: translate(-50%, -50%) translateY(10px);
          }
        }
      `}</style>
    </div>
  );
};
