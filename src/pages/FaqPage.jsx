import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { faqs } from "../data/data";


const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {faqs.map((faq, index) => (
        <div className="border-b border-gray-200" key={index}>
          <button
            className="flex justify-between w-full p-4 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <p className="text-lg font-medium text-gray-900">{faq.question}</p>
            {activeIndex === index ? (
              <MinusIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <PlusIcon className="w-5 h-5 text-gray-500" />
            )}
          </button>
          {activeIndex === index && (
            <div className="p-4 pt-0">
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqPage;
