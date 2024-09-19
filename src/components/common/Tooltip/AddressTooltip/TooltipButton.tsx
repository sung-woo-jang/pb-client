import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
}

export default function TooltipButton({
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-2 py-1 rounded text-xs font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
