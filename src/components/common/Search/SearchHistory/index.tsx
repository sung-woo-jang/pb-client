import SearchInput from '@/components/common/Search/SearchBox/SearchInput';
import SearchResultsTabs from '@/components/common/Search/SearchHistory/SearchResultsTabs';

export default function SearchHistory() {
  return (
    <div className="w-full h-screen bg-white text-black">
      <div className="flex items-center border-b border-gray-200 bg-gray-100">
        <SearchInput />
      </div>
      <SearchResultsTabs />
    </div>
  );
}
