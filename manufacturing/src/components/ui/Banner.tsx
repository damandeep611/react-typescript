import { ArrowRightCircle, Zap } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "2020", value: 400 },
  { name: "2021", value: 600 },
  { name: "2022", value: 800 },
  { name: "2023", value: 1200 },
  { name: "2024", value: 1600 },
];

export default function Banner() {
  return (
    <section className="relative h-screen bg-white overflow-hidden">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative mx-auto p-2">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 px-6 py-4">
          {/* left col - takes 3/5 of the space */}
          <div className="lg:col-span-3 space-y-8 pt-10">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-blue-700">
                Revolutionizing AI with cutting-edge chips
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight">
                Next-Gen
                <span className="flex items-center mt-2 text-blue-600">
                  AI Chips
                  <img
                    src="https://img.icons8.com/plasticine/50/processor.png"
                    alt=""
                    width={70}
                    className="animate-pulse"
                  />
                </span>
                <span className="block mt-2">for a smarter future</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Powering the next generation of AI with our advanced chip designs.
              Enhance performance, reduce energy consumption, and accelerate
              innovation across industries.
            </p>
            <div className="flex items-center gap-6 py-10">
              <button className="flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white p-4 px-8 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                Explore our chips
                <ArrowRightCircle className="bg-white text-blue-600 rounded-full" />
              </button>
              <button className="p-4 px-8 border-2 border-gray-300 hover:border-blue-600 rounded-full text-lg font-semibold transition-all hover:bg-blue-50">
                How it works
              </button>
            </div>
          </div>

          {/* right col - takes 2/5 of the space */}
          <div className="lg:col-span-2 relative pt-10">
            <div className="relative overflow-hidden rounded-2xl ">
              <div className="absolute inset-0 " />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Neural_network.svg"
                alt=""
                className="aspect-[4/3] object-cover transform hover:scale-105 transition-transform duration-500"
              />

              <OverlayCard
                title="Performance Boost"
                value="250%"
                icon={<Zap className="text-yellow-400 w-6 h-6" />}
                className="absolute top-6 left-6 z-20"
              />
              <GraphCard
                title="Growth Trajectory"
                className="absolute -bottom-4 -right-4 w-72 h-48 z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverlayCard({ title, value, icon, className }) {
  return (
    <div
      className={`bg-white backdrop-blur-sm bg-opacity-95 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${className}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-xl font-bold text-blue-600">{value}</p>
        </div>
      </div>
    </div>
  );
}

function GraphCard({ title, className }) {
  return (
    <div
      className={`bg-white backdrop-blur-sm bg-opacity-95 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${className}`}
    >
      <p className="text-sm font-bold text-gray-800 mb-2">{title}</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" tick={{ fontSize: 10 }} stroke="#6b7280" />
          <YAxis tick={{ fontSize: 10 }} stroke="#6b7280" />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-blue-600 text-white p-2 rounded-lg text-xs shadow-lg">
                    <p>{`${payload[0].payload.name}: ${payload[0].value}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#3b82f6" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
