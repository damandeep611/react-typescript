import { animated, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LicensePlateButton from "./LicensePlate";

const floatingElements = [
  { id: 1, title: "E-Signature", top: "40%", left: "60%" },
  { id: 2, title: "Invoices", top: "20%", right: "20%" },
  { id: 3, title: "E-Forms", bottom: "30%", left: "70%" },
  { id: 4, title: "E-Receipts", top: "30%", right: "10%" },
];

interface Point {
  x: number;
  y: number;
}

const AnimatedPath = animated("path");

export default function LandingPage() {
  const [elementPositions, setElementPositions] = useState<Point[]>([]);
  const [centralPosition, setCenterPosition] = useState<Point>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return;
      const centerElement =
        containerRef.current.querySelector(".center-circle");
      if (centerElement) {
        const rect = centerElement.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        setCenterPosition({
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        });
      }
      const positions = elementsRef.current.map((element) => {
        if (!element || !containerRef.current) return { x: 0, y: 0 };
        const rect = element.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        };
      });
      setElementPositions(positions);
    };
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  const lineSpring = useSpring({
    from: { length: 0 },
    to: { length: 1 },
    config: { duration: 1500 },
  });
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-purple-50">
      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center justify-center font-medium  border border-gray-300 shadow-sm  h-8 px-3 text-xs rounded-full">
              {" "}
              🎉 <div className="bg-gray-400 w-0.5 mx-2 h-3" /> New ! Globe
              Animations <ArrowRight className=" mx-2 w-3 h-3" />
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Effortless Motion UI - Built with{" "}
              <span className="text-blue-800">React and TailwindCss</span>
            </h1>
            <p className="mt-6 text-lg text-gray-800 leading-relaxed">
              Addicting, interactive, animated UI components and templates for{" "}
              <span className="font-semibold space-x-2 ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="inline  text-[#159ECA] mx-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                </svg>
                React,
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="inline text-[#38BDF8] mx-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                </svg>
                Tailwind CSS,{" "}
                <img
                  width={24}
                  height={24}
                  className="inline"
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-logo-shadow-tal-revivo.png"
                  alt=""
                />
                Framer Motion
              </span>
              & more. Copy & paste them into your code with 2 clicks
            </p>

            <div className="flex mt-8 gap-4">
              <div className="group relative h-fit w-fit ">
                <button
                  className="cursor-pointer relative overflow-hidden font-medium  text-base py-2 px-4 bg-indigo-600 text-white  z-10 transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1 "
                  style={{
                    width: "fit-content",
                    clipPath:
                      "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% 100%, calc(100% - 8px) 100%, 8px 100%, 0 100%, 0 0)",
                  }}
                >
                  View Components
                </button>
                <div
                  style={{
                    clipPath:
                      "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% 100%, calc(100% - 8px) 100%, 8px 100%, 0 100%, 0 0)",
                  }}
                  className="absolute inset-0 z-0  bg-neutral-950 transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1"
                ></div>
              </div>
              <div className="group relative h-fit w-fit">
                {/* Grid Background */}
                <div
                  className="absolute inset-0 z-0 bg-neutral-900 bg-grid-pattern pointer-events-none"
                  aria-hidden="true"
                ></div>

                {/* Left Bolt */}
                <div
                  className="absolute  top-1/2 left-2 w-3 h-3 bg-red-600 rounded-full border-2 border-gray-400 transform -translate-y-1/2 z-50 shadow-inner"
                  aria-hidden="true"
                ></div>

                {/* License Plate Button */}
                <button
                  className="relative z-20 text-center cursor-pointer overflow-hidden font-bold text-xl py-4 px-8 bg-gradient-to-b from-yellow-400 to-yellow-500 text-blue-900 uppercase tracking-wide border-4 border-blue-900 shadow-md transition-transform duration-300 group-hover:rotate-2 group-hover:translate-y-1 origin-left"
                  style={{
                    clipPath:
                      "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% 100%, calc(100% - 8px) 100%, 8px 100%, 0 100%, 0 0)",
                  }}
                >
                  <div className="text-xs tracking-wider">New York</div>
                  <div className="text-3xl font-extrabold mt-1">
                    View Components
                  </div>
                  <div className="text-sm tracking-wider mt-1">
                    Empire State
                  </div>
                </button>

                {/* Right Bolt */}
                <div
                  className="absolute top-1/2 right-2 w-3 h-3 bg-red-600 rounded-full border-2 border-gray-400 transform -translate-y-1/2 z-10 shadow-inner"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Illustration */}
          <div
            ref={containerRef}
            className="relative h-[600px] hidden lg:block"
          >
            {/* lincense plate  */}
            <div className="absolute ">
              <LicensePlateButton />
            </div>
            {/* connecting lines svg */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 1 }}
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0.7)" />
                </linearGradient>
              </defs>
              {/* animated connection lines */}
              {elementPositions.map((pos, index) => (
                <AnimatedPath
                  key={`line-${index}`}
                  d={`M ${centralPosition.x} ${centralPosition.y} L ${pos.x} ${pos.y}`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray={1}
                  strokeDashoffset={lineSpring.length.to((x) => 1 - x)}
                />
              ))}
              {/* inter element connections  */}
              {elementPositions.map((pos1, i) =>
                elementPositions.map((pos2, j) => {
                  if (i < j) {
                    return (
                      <AnimatedPath
                        key={`connection-${i}-${j}`}
                        d={`M ${pos1.x} L ${pos2.x} ${pos2.y}`}
                        stroke="url(#lineGradient)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeDasharray={1}
                        strokeDashoffset={lineSpring.length.to((x) => 1 - x)}
                      />
                    );
                  }
                  return null;
                })
              )}
            </svg>
            {/* Center Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="center-circle absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-600 rounded-full opacity-90"
            />

            {/* Floating Elements */}
            {floatingElements.map((element, index) => (
              <motion.div
                key={element.id}
                ref={(el) => (elementsRef.current[index] = el)}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="absolute z-10 bg-white p-4 rounded-xl shadow-lg w-40"
                style={{
                  top: element.top,
                  left: element.left,
                  right: element.right,
                  bottom: element.bottom,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span className="text-sm font-medium text-gray-700">
                    {element.title}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 1 }}
            >
              <pattern
                id="grid"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" className="fill-gray-900" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
