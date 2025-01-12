import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is react?",
    answer: "React is a javascript library for building user interfaces",
  },
  {
    question: "What is TypeScript?",
    answer:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  },
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
  },
  {
    question: "What are React Hooks?",
    answer:
      "React Hooks are functions that let you 'hook into' React state and lifecycle features from function components. They let you use state and other React features without writing a class.",
  },
];

const AccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  toggleAccordion: () => void;
}> = ({ item, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium text-gray-100">
          {" "}
          {item.question}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-200 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-w-96 opacity-100 " : "max-h-0 opacity-0"
        }`}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-blue-500 py-12">
      <div className=" mt-8 mx-8 rounded-lg  overflow-hidden">
        <h2>Frequently Asked Questions</h2>
        <div className="divide-y divide-gray-200">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
