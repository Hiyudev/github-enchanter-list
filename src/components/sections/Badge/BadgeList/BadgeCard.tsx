import { useTheme } from 'next-themes';
import Image from 'next/image';
import { ComponentProps } from 'react';
import { toast } from 'react-toastify';
import { Badge, BadgeStyles, CopyAsOptions } from '../../../../@types';
import BadgeContainer from './BadgeContainer';

type BadgeCardStyleProps = {
  style: BadgeStyles;
};

type BadgeCardProps = Badge &
  ComponentProps<'li'> &
  BadgeCardStyleProps & {
    copyAs: CopyAsOptions;
  };

function BadgeCard({ style, copyAs, name, url, ...props }: BadgeCardProps) {
  const { theme } = useTheme();

  const copyToClipboard = () => {
    let clipbaordText = '';

    switch (copyAs) {
      case 'link':
        clipbaordText = url;
        break;
      case 'html':
        clipbaordText = `<img src="${url}" alt="${name} badge"/>`;
        break;
      case 'markdown':
        clipbaordText = `![${name}](${url})`;
        break;
      default:
        break;
    }

    navigator.clipboard.writeText(clipbaordText);
  };

  const handleClick = () => {
    copyToClipboard();
    toast(`Copied ${name} badge to your clipboard`, {
      type: 'success',
      theme: theme == 'light' ? 'light' : 'dark',
    });
  };

  return (
    <li className="flex" {...props}>
      <button
        aria-label={`Copy ${name} badge`}
        className="bg-primary border-secondary group relative flex-1 rounded-xl border p-4 outline-none"
        onClick={handleClick}
      >
        <div className="fancy-gradient absolute inset-0.5 -z-10 rounded-md opacity-0 blur transition-opacity group-hover:opacity-75 group-focus:opacity-75" />

        <BadgeContainer style={style}>
          <Image
            objectFit="contain"
            layout="fill"
            alt={`${name} badge`}
            src={url}
          />
        </BadgeContainer>
      </button>
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
