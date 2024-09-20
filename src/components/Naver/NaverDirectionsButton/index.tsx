import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

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
  const search = React.useMemo(() => {
    const addressToUse = roadAddress.length > 0 ? roadAddress : address;
    return `${addressToUse.split(' ').slice(0, 2).join(' ')} ${title}`.trim();
  }, [roadAddress, address, title]);

  return (
    <Link
      href={`https://map.naver.com/p/search/${encodeURIComponent(search)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className={styles.directionButton}>길찾기</button>
    </Link>
  );
}
