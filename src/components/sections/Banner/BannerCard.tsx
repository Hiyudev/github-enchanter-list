import Image from 'next/image';
import { getConstratColor } from '../../../lib/color';
import { SimpleIcon } from '../../../types';

function BannerCard({ title, hex, slug }: SimpleIcon) {
  const logoColor = getConstratColor(hex);
  return (
    <li className="border-secondary rounded-xl border p-4">
      <div className="relative h-7 min-w-[200px]">
        <Image
          objectFit="contain"
          layout="fill"
          alt={`${title} banner`}
          src={`https://img.shields.io/badge/${title}-${hex}?style=for-the-badge&logo=${slug}&logoColor=${logoColor}`}
        />
      </div>
    </li>
  );
}

export function BannerCardSkeleton() {
  return (
    <li className="border-secondary rounded-xl border p-4">
      <div className="relative h-7 min-w-[200px]">
        <div className="bg-secondary h-full w-full animate-pulse rounded-full" />
      </div>
    </li>
  );
}

export default BannerCard;
