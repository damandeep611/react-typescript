import BentoGrid from "@/pages/demos/BentoGrid";
import { ShowcaseComponent } from "../ShowcaseComponent";

export default function Grids() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <ShowcaseComponent
        title="Bento Grid"
        badge="Free"
        component={<BentoGrid />}
        language="typescript"
        code={`
import { Card } from "@/components/ui/card";
import { Code2Icon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { codeshowcase } from "@/data/cardsData";

export default function BentoGrid() {
  const [codeString, setCodeString] = useState("");
  useEffect(() => {
    setCodeString(codeshowcase);
  }, []);
  return (
    <section className="  p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6 border border-gray-400/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/10 to-gray-400/10" />
            <span className="px-3 py-1 bg-purple-500/20  text-sm rounded-full">
              New
            </span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4"
            >
              <h2 className="text-2xl font-semibold mb-2">
                Empower your team to{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  solve bigger problems
                </span>{" "}
              </h2>
              <p className="text-xl mb-4">with Copilot for business</p>
              <div className="text-3xl font-bold">
                $19{" "}
                <span className="text-sm font-normal text-gray-400">
                  per user <br /> per month
                </span>
              </div>
            </motion.div>
          </Card>
        </motion.div>
        {/* Editor Integration */}
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg mb-4">
              Keep flying with your favorite editor
            </h3>
            <div className="flex gap-4">
              {["Vscode", "JetBrains", "Visual Studio", "Neovim"].map(
                (editor, i) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    key={editor}
                    className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center"
                  >
                    <Code2Icon className="w-6 h-6" />
                  </motion.div>
                )
              )}
            </div>
          </div>
          {/* Available now button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-6 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-medium"
          >
            Now avilable for all business
          </motion.button>
        </div>

        {/* Code editor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden col-span-full border rounded-lg"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-yellow-50"
            animate={{
              background: [
                "linear-gradient(to top right, rgba(255, 253, 240, 0.05), rgba(255, 248, 225, 0.05))",
                "linear-gradient(to top right, rgba(255, 248, 225, 0.05), rgba(255, 253, 240, 0.05))",
                "linear-gradient(to top right, rgba(255, 253, 240, 0.05), rgba(255, 248, 225, 0.05))",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <div className="rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <pre className="text-gray-500">
              <code>
                {codeString.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.03, delay: index * 0.02 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </code>
            </pre>
          </div>
        </motion.div>
        {/* Stats */}
        <div className="col-span-full grid grid-cols-2 gap-8">
          <StatsCard value={55} label="faster coding" />
          <StatsCard value={40} label="Code written" />
        </div>
        {/* powered by section */}
        <div className="col-span-full flex items-center justify-center gap-2 text-gray-500">
          Powered by
          <span className="font-semibold ">OpenAi Codex</span>
        </div>
      </div>
    </section>
  );
}

function StatsCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <div>
        <div className="text-4xl font-bold mb-2">
          <span>{value}</span>%
        </div>
        <div>{label}</div>
      </div>
    </div>
  );
}
`}
        fullWidth={true}
      />
    </div>
  );
}
