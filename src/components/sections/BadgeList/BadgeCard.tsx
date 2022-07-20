import Image from 'next/image';
import { ComponentProps } from 'react';
import { Badge, BadgeStyles } from '../../../@types';
import BadgeContainer from './BadgeContainer';

type BadgeCardStyleProps = {
  style: BadgeStyles;
};

type BadgeCardProps = Badge & ComponentProps<'li'> & BadgeCardStyleProps;

function BadgeCard({ style, name, url, ...props }: BadgeCardProps) {
  return (
    <li className="border-secondary rounded-xl border p-4" {...props}>
      <BadgeContainer style={style}>
        <Image
          objectFit="contain"
          layout="fill"
          alt={`${name} badge`}
          src={url}
        />
      </BadgeContainer>
    </li>
  );
}

export function BadgeCardSkeleton({ style }: BadgeCardStyleProps) {
  return (
    <li className="border-secondary rounded-xl border p-4">
      <BadgeContainer style={style}>
        <div className="bg-secondary h-full w-full animate-pulse rounded-full" />
      </BadgeContainer>
    </li>
  );
}

export default BadgeCard;
