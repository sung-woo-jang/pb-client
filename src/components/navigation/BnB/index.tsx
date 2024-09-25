'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FiHome, FiMapPin, FiRss, FiUser } from 'react-icons/fi';
import useGetMyInfo from '@/api/auth/getMyInfo';
import isNil from 'lodash/isNil';

const navItems = [
  { href: '/place', icon: FiMapPin, label: '장소' },
  { href: '/newsfeed', icon: FiRss, label: '뉴스피드' },
  { href: '/timeline/user/', icon: FiHome, label: '타임라인', isDynamic: true },
  { href: '/management/my-page', icon: FiUser, label: '마이페이지' },
];

export default function BnB() {
  const { data: userInfo } = useGetMyInfo();
  const pathname = usePathname();
  const router = useRouter();
  if (!isNil(userInfo)) {
    const userId = userInfo.id;

    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const href = item.isDynamic ? `${item.href}${userId}` : item.href;
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={item.href}
                href={href}
                className={`flex flex-col items-center justify-center w-full h-full ${
                  isActive ? 'text-blue-500' : 'text-gray-500'
                }`}
              >
                <item.icon className="w-6 h-6 mb-1" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    );
  } else {
    router.push('/login');
    return null;
  }
}
