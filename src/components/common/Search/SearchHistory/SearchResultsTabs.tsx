import React, { useState } from 'react';
import { MdBiotech, MdClose } from 'react-icons/md';

type TabType = '계정' | '장소';

interface SearchResult {
  id: string;
  content: string;
}

interface SearchResultsTabsProps {
  searchTerm: string;
  results: Record<TabType, SearchResult[]>;
}

export default function SearchResultsTabs({
  searchTerm,
  results,
}: SearchResultsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('장소');
  const tabs: TabType[] = ['장소', '계정'];

  return (
    <div className="w-full h-screen bg-white text-black">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4">
        {results[activeTab].length > 0 ? (
          results[activeTab].map((result) => (
            <div
              key={result.id}
              className="flex items-center justify-between py-2 border-b border-gray-200"
            >
              <span>{result.content}</span>
              <MdClose className="w-4 h-4 cursor-pointer text-gray-500" />
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-64">
            <MdBiotech className="w-24 h-24 text-gray-300" />
            <p className="mt-4 text-gray-500">
              {`"${searchTerm}"`} 에 대한 {activeTab} 결과가 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
