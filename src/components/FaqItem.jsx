import { useState } from "react";

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left  text-xl md:text-2xl font-medium text-gray-800"
      >
        <span>{question}</span>
       <span className="text-blue-500 border border-[#00B4D8] rounded-full w-8 h-8 flex items-center justify-center">
  {isOpen ? "▴" : "▾"}
</span>

      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600  text-xl md:text-2xl ">{answer}</p>
      )}
    </div>
  );
}
