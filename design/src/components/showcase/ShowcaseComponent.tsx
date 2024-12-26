import React, { useState } from "react";
import { useTabs } from "@/hooks/useTabs";
import { TabButton } from "./TabButton";
import { AnimatePresence, motion } from "framer-motion";
import { RefreshCcw } from "lucide-react";
import ErrorBoundary from "./ErrorBoundary";
import CodeBlock from "./codeblock";

interface ShowcaseComponentProps {
  title: string;
  badge?: string;
  component: React.ReactNode;
  code: string;
  language: string;
  fullWidth?: boolean;
}

export const ShowcaseComponent: React.FC<ShowcaseComponentProps> = ({
  title,
  badge,
  component,
  code,
  language,
  fullWidth = false,
}) => {
  const { activeTab, switchTab } = useTabs();
  const [key, setKey] = useState(0);

  const reloadComponent = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden ${
        fullWidth ? "w-full" : "max-w-7xl"
      }`}
    >
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {badge}
          </span>
        </div>
      </div>
      <div className="border-b flex items-center">
        <TabButton
          label="VIEW"
          isActive={activeTab === "VIEW"}
          onClick={() => switchTab("VIEW")}
        />
        <TabButton
          label="CODE"
          isActive={activeTab === "Code"}
          onClick={() => switchTab("Code")}
        />
        <motion.button
          className="ml-auto mr-4 p-2 rounded-full hover:bg-gray-100"
          onClick={reloadComponent}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <RefreshCcw className="w-5 h-5 text-gray-600" />
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "VIEW" ? (
            <div className="p-4">
              <ErrorBoundary>
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {component}
                </motion.div>
              </ErrorBoundary>
            </div>
          ) : (
            <div className="p-4 max-h-[600px] overflow-auto">
              <CodeBlock code={code} language={language} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
