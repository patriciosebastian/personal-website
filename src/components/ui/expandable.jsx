'use client'

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Expandable ({ className = "", trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`expandable ${className}`}>
      {/* Trigger with ChevronDown */}
      <div
        className="flex items-start justify-between cursor-pointer hover:underline"
        onClick={toggle}
      >
        <span className="text-balance">{trigger}</span>
        <ChevronDown
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Expandable Content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-fit" : "max-h-0"
        }`}
      >
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
};
