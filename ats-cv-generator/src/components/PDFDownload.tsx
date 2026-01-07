"use client";

import { useReactToPrint } from "react-to-print";
import { CVData } from "../types/cv";

interface Props {
  data: CVData;
  contentRef: React.RefObject<HTMLDivElement>;
}

export default function PDFDownload({ data, contentRef }: Props) {
  const handlePrint = useReactToPrint({
    contentRef,
  });

  const onClick = () => {
    if (handlePrint) {
      handlePrint();
    }
  };

  return (
    <button
      onClick={onClick}
      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-4-2m4 2l4-2"
        />
      </svg>
      Télécharger en PDF
    </button>
  );
}
