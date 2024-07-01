import Image from 'next/image';
import Link from 'next/link';

export default function TimelineImages() {
  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {[1, 2, 3, 4, 5, 6].map((value) => (
        <Link key={value} href={`/timeline/${value}`}>
          <Image
            key={value}
            src="/imageBox.png"
            alt={`temp-${value}`}
            width={100}
            height={100}
          />
        </Link>
      ))}
    </div>
  );
}
