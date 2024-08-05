'use client';
import { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ReadMoreTextChevronRightIconStyle } from '@/components/common/ReadMoreText/cssProps.styles';

interface ReadMoreTextProps {
  text: string;
}

export default function ReadMoreText({ text }: ReadMoreTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex-1">
      {isExpanded ? text : `${text.slice(0, 45)}...`}
      {isExpanded || (
        <ChevronRightIcon
          sx={ReadMoreTextChevronRightIconStyle}
          onClick={toggleReadMore}
        />
      )}
    </div>
  );
}
