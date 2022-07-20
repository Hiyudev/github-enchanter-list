import Image from 'next/image';
import { SimpleIcon } from '../../../@types';
import { generateBadgeURL } from '../../../utils/badge';

function BadgeCard({ title, hex, slug }: SimpleIcon) {
  return (
    <li className="border-secondary rounded-xl border p-4">
      <div className="relative h-7 min-w-[200px]">
        <Image
          objectFit="contain"
          layout="fill"
          alt={`${title} banner`}
          src={generateBadgeURL(title, hex, slug)}
        />
      </div>
    </li>
  );
}

export function BadgeCardSkeleton() {
  return (
    <li className="border-secondary rounded-xl border p-4">
      <div className="relative h-7 min-w-[200px]">
        <div className="bg-secondary h-full w-full animate-pulse rounded-full" />
      </div>
    </li>
  );
}

export default BadgeCard;
