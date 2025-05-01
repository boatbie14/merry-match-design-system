"use client";

import React, { useState, useEffect } from "react";

const PreviewCode = ({ children, language = "jsx" }) => {
  const [copied, setCopied] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    // Dynamic import Prism และ languages ที่ต้องการ
    const loadPrism = async () => {
      const Prism = (await import("prismjs")).default;

      // Import theme
      await import("prismjs/themes/prism-tomorrow.css");

      // Import languages ที่ต้องการใช้
      await import("prismjs/components/prism-jsx");
      await import("prismjs/components/prism-css");
      await import("prismjs/components/prism-javascript");
      await import("prismjs/components/prism-markup");

      // Highlight all code blocks
      if (typeof window !== "undefined") {
        Prism.highlightAll();
        setHighlighted(true);
      }
    };

    loadPrism();
  }, [children]);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);

    // Reset copy status after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="preview-code-container relative bg-[#2d2d2d] rounded-md overflow-hidden">
      {/* Header with copy button */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#2d2d2d] border-b border-gray-700">
        <span className="text-xs text-white">{language.toUpperCase()}</span>
        <button
          onClick={handleCopy}
          className="text-xs bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded transition-colors duration-200"
        >
          {copied ? "Copied!" : "Copy code"}
        </button>
      </div>

      {/* Code content with syntax highlighting */}
      <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
};

export default PreviewCode;
