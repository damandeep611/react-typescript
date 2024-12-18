import { motion } from "framer-motion";

import { Users, BookMarked, Brain, Sparkles, ArrowRight } from "lucide-react";
import { GradientBg } from "./GradientBg";

import FloatingCard from "./FloatingCard";
import AnimatedSmartphone from "./AnimatedSmartphone";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center ">
      <GradientBg />
      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-16 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center px-4 py-1.5 bg-white text-primary rounded-full text-sm font-medium border border-primary/20 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 mr-2 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Launch Offer: Get 20% off on yearly plans
              </span>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center gap-6 pt-4"
              >
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-white bg-gray-200"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Join 10,000+ users</p>
                  <p className="text-muted-foreground">who trust Bookbrain</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm font-medium ml-2">4.9/5</span>
                </div>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Your Second Brain for
                <span className="text-primary"> Bookmarking</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Effortlessly capture, organize, and retrieve your digital
                knowledge. Bookbrain helps you build your personal knowledge
                base.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 shadow-sm hover:bg-blue-600 transition">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </button>

              <button className="px-8 py-3 rounded-lg font-medium border border-blue-400 text-blue-500 bg-white shadow-sm hover:bg-blue-50 transition">
                View Demo
              </button>
            </motion.div>
          </div>
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Smartphone Mockup */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedSmartphone />
            </div>
            {/* Floating Elements */}
            <FloatingCard
              className="absolute left-40 top-20 p-4 w-64"
              delay={0.6}
              x={-50}
            >
              <div className="flex items-center space-x-3">
                <BookMarked className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Smart Bookmarking</h3>
                  <p className="text-sm text-muted-foreground">
                    Save and categorize effortlessly
                  </p>
                </div>
              </div>
            </FloatingCard>
            <FloatingCard
              className="absolute right-0 top-[30%] p-4 w-64 md:right-[5%]"
              delay={0.8}
              x={50}
            >
              <div className="flex items-center space-x-3">
                <Brain className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Knowledge Graph</h3>
                  <p className="text-sm text-muted-foreground">
                    Visualize your digital brain
                  </p>
                </div>
              </div>
            </FloatingCard>
            <FloatingCard
              className="absolute left-0 bottom-[30%] p-4 w-64 md:left-[5%]"
              delay={1}
              y={50}
            >
              <div className="flex items-center space-x-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">AI-Powered Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Discover hidden connections
                  </p>
                </div>
              </div>
            </FloatingCard>
            <FloatingCard
              className="absolute right-0 bottom-[15%] p-4 w-64 md:right-[5%]"
              delay={1.2}
              y={50}
            >
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Collaborative Spaces</h3>
                  <p className="text-sm text-muted-foreground">
                    Share and learn together
                  </p>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
}
