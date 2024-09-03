import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaUserFriends } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="relative h-48 w-full md:w-48">
              <Image
                className="object-cover"
                src="/placeholder-user.jpg"
                alt="User profile"
                layout="fill"
              />
              <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
                <MdModeEdit className="text-gray-600 text-xl" />
              </button>
            </div>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              프로필
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              닉네임
            </h1>
            <p className="mt-2 text-gray-500">아이디</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FaUser className="text-gray-400" />
                  <span className="text-gray-700">닉네임 변경</span>
                </div>
                <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  수정
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FaUserFriends className="text-gray-400" />
                  <span className="text-gray-700">팔로우 관리</span>
                </div>
                <Link href="/management/follow">
                  <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    관리
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
