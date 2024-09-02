'use client';
import React, { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface ReadMoreTextProps {
  text: string;
  maxLength?: number;
}

export default function ReadMoreText({
  text,
  maxLength = 20,
}: ReadMoreTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandText = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const shouldTruncate = text.length > maxLength;

  return (
    <div className="flex-1 inline">
      <span className="inline">
        {shouldTruncate && !isExpanded
          ? `${text.slice(0, maxLength)}... `
          : `${text} `}
      </span>
      {shouldTruncate && !isExpanded && (
        <button
          onClick={expandText}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md px-1 transition-colors duration-200"
          aria-expanded={isExpanded}
        >
          <ChevronRightIcon fontSize="small" className="ml-1" />
        </button>
      )}
    </div>
  );
}
