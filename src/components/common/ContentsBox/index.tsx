import * as React from 'react';

interface ContentsBoxProps {
  children: React.ReactNode;
}

export default function ContentsBox({ children }: ContentsBoxProps) {
  return (
    <div className={`w-full p-4 bg-white rounded-md shadow-md`}>{children}</div>
  );
}
