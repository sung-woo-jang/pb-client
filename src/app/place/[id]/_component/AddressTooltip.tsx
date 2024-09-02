import React, { useEffect, useRef, useState } from 'react';
import { FaCopy, FaMapLocation } from 'react-icons/fa6';
import ChevronDownIcon from '@/components/Icon/ChevronDownIcon';

interface AddressTooltipProps {
  roadAddress: string;
  lotAddress: string;
}

export default function AddressTooltip({
  roadAddress,
  lotAddress,
}: AddressTooltipProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // TODO: 여기에 복사 완료 알림을 추가해야함.
  };

  const tooltipContent = (
    <div className="space-y-2 text-sm">
      <div>
        <strong className="block mb-1">도로명 주소</strong>
        <div className="flex items-center justify-between">
          <p className="mb-1 mr-2">{roadAddress}</p>
          <TooltipButton
            onClick={() => copyToClipboard(roadAddress)}
            variant="ghost"
            className="flex-shrink-0"
          >
            <FaCopy className="mr-1" /> 복사
          </TooltipButton>
        </div>
      </div>
      <div className="border-t pt-2">
        <strong className="block mb-1">지번 주소</strong>
        <div className="flex items-center justify-between">
          <p className="mr-2">{lotAddress}</p>
          <TooltipButton
            onClick={() => copyToClipboard(lotAddress)}
            variant="ghost"
            className="flex-shrink-0"
          >
            <FaCopy className="mr-1" /> 복사
          </TooltipButton>
        </div>
      </div>
    </div>
  );

  return (
    <Tooltip content={tooltipContent}>
      <div className="flex items-center cursor-pointer">
        <FaMapLocation className="h-4 w-4 mr-1" />
        <span className="mr-1 truncate">{roadAddress}</span>
        <ChevronDownIcon className="h-4 w-4 flex-shrink-0" />
      </div>
    </Tooltip>
  );
}

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

function Tooltip({ children, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <div ref={triggerRef} onClick={() => setIsVisible(!isVisible)}>
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          className="absolute z-10 w-64 p-3 mt-2 bg-white rounded-lg shadow-lg border border-gray-200"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
}

function TooltipButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'px-2 py-1 rounded text-xs font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
