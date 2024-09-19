import React, { useState } from 'react';
import { MdConstruction, MdHistory } from 'react-icons/md';

type TabType = '계정' | '장소';

interface SearchResultsTabsProps {}

export default function SearchResultsTabs({}: SearchResultsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('장소');
  const tabs: TabType[] = ['장소', '계정'];

  const renderContent = () => {
    const commonClasses =
      'flex flex-col items-center justify-center h-64 rounded-lg p-6 bg-gradient-to-br';

    if (activeTab === '계정') {
      return (
        <div className={`${commonClasses}`}>
          <MdConstruction className="w-24 h-24 text-yellow-500 animate-bounce" />
          <p className="mt-6 text-lg font-semibold text-yellow-700 text-center">
            <strong>계정 검색 기능</strong> 준비 중이에요! 🚧
            <br />곧 멋진 기능으로 찾아뵙겠습니다. 😊
          </p>
        </div>
      );
    } else {
      return (
        <div className={`${commonClasses}`}>
          <MdHistory className="w-24 h-24 text-blue-500 animate-bounce" />
          <p className="mt-6 text-lg font-semibold text-blue-700 text-center">
            <strong>장소 검색 기록 기능</strong> 개발 중! 📜
            <br />
            조금만 기다려 주십쇼. ^^7
            <br />
            ps.검색기능은 됩니다.
          </p>
        </div>
      );
    }
  };

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
      <div className="p-4">{renderContent()}</div>
    </div>
  );
}
