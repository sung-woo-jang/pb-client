import React, { useState } from 'react';
import { MdBiotech, MdClose } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';

// 타입 정의
type TabType = '추천' | '계정' | '오디오' | '태그' | '장소' | '릴스';

interface SearchResult {
  id: string;
  content: string;
}

interface SearchResultsProps {
  searchTerm: string;
  results: Record<TabType, SearchResult[]>;
}

const SearchResultsTabs: React.FC<SearchResultsProps> = ({
  searchTerm,
  results,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('추천');
  const tabs: TabType[] = ['추천', '계정', '오디오', '태그', '장소', '릴스'];

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
};

export default function SearchHistory() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // 더미 데이터
  const dummyResults: Record<TabType, SearchResult[]> = {
    추천: [
      { id: '1', content: '추천 결과 1' },
      { id: '2', content: '추천 결과 2' },
    ],
    계정: [{ id: '3', content: '계정 결과 1' }],
    오디오: [],
    태그: [
      { id: '4', content: '태그 결과 1' },
      { id: '5', content: '태그 결과 2' },
    ],
    장소: [],
    릴스: [{ id: '6', content: '릴스 결과 1' }],
  };

  return (
    <div className="w-full h-screen bg-white text-black">
      <div className="flex items-center border-b border-gray-200 bg-gray-100">
        <IoIosArrowBack className="text-gray-500 w-6 h-6 ml-2 cursor-pointer" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="검색어를 입력하세요"
          className="w-full p-2 bg-gray-100 text-black focus:outline-none"
        />
      </div>
      <SearchResultsTabs searchTerm={searchTerm} results={dummyResults} />
    </div>
  );
}
