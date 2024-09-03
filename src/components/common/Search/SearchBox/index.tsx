import React from 'react';
import SearchInput from '@/components/common/Search/SearchBox/SearchInput';

export default function SearchBox() {
  return (
    <div className="absolute top-14 left-4 right-4 z-10">
      <div className="bg-white rounded-full shadow-lg flex items-center p-2">
        <SearchInput />
      </div>
    </div>
  );
}
