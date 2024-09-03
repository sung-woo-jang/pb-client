import SearchInput from '@/components/common/Search/SearchBox/SearchInput';
import useSearchBoxControls from '@/store/slice/searchBox/useSearchBoxControls';
import SearchResultsTabs from '@/components/common/Search/SearchHistory/SearchResultsTabs';

type TabType = '계정' | '장소';

interface SearchResult {
  id: string;
  content: string;
}

export default function SearchHistory() {
  const { inputText } = useSearchBoxControls();
  // 더미 데이터
  //
  const dummyResults: Record<TabType, SearchResult[]> = {
    계정: [{ id: '3', content: '계정 결과 1' }],
    장소: [],
  };

  return (
    <div className="w-full h-screen bg-white text-black">
      <div className="flex items-center border-b border-gray-200 bg-gray-100">
        <SearchInput />
      </div>
      {/*  TODO: 검색이 이루어 지고 난 후에 보이기*/}
      <SearchResultsTabs searchTerm={inputText} results={dummyResults} />
    </div>
  );
}
