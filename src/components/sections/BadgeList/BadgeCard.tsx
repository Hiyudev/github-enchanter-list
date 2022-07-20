import Image from 'next/image';
import { ComponentProps } from 'react';
import { Badge } from '../../../@types';

type BadgeCardProps = Badge & ComponentProps<'li'>;

function BadgeCard({ name, url, ...props }: BadgeCardProps) {
  return (
    <li className="border-secondary rounded-xl border p-4" {...props}>
      <div className="relative h-7 min-w-[200px]">
        <Image
          objectFit="contain"
          layout="fill"
          alt={`${name} badge`}
          src={url}
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
