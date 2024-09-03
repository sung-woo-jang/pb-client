import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { MdStars } from 'react-icons/md';
import usePPCategoryList from '@/store/slice/drawer/ppCategoryList/usePPCategoryList';

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { drawerOpenHandler } = usePPCategoryList();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // TODO: 검색 로직 구현
  };

  return (
    <div className="absolute top-14 left-4 right-4 z-10">
      <div className="bg-white rounded-full shadow-lg flex items-center p-2">
        <button className="p-2 focus:outline-none">
          <GoSearch className="h-5 w-5 text-gray-500" />
        </button>
        <input
          type="text"
          placeholder="장소, 버스, 지하철, 주소 검색"
          className="flex-grow px-4 py-2 bg-transparent focus:outline-none text-gray-700"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="p-2 focus:outline-none" onClick={drawerOpenHandler}>
          <MdStars className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
}
