import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { FiNavigation } from 'react-icons/fi';

interface NaverDirectionsButtonProps {
  roadAddress: string;
  address: string;
  title: string;
}

export default function NaverDirectionsButton({
  title,
  address,
  roadAddress,
}: NaverDirectionsButtonProps) {
  const searchQuery = React.useMemo(() => {
    const primaryAddress = roadAddress || address;
    const shortAddress = primaryAddress.split(' ').slice(0, 2).join(' ');
    return `${shortAddress} ${title}`.trim();
  }, [roadAddress, address, title]);

  const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent(searchQuery)}`;

  return (
    <Link
      href={naverMapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.directionButtonLink}
    >
      <button className={styles.directionButton}>
        <FiNavigation className={styles.icon} />
        <span>길찾기</span>
      </button>
    </Link>
  );
}
