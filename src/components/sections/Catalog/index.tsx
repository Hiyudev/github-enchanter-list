import { ChartBar, FlagBanner, Flame, Trophy } from 'phosphor-react';
import { Page } from '../../../@types';
import CatalogItem from './CatalogItem';

export const ListPages: Page[] = [
  {
    title: 'Badges',
    description:
      'List of concise, consistent, and legible badges for your profile or project readme.',
    icon: <FlagBanner />,
    href: '/list/badges',
  },
  {
    title: 'Summary cards',
    description: 'Summary cards for your github profile.',
    icon: <ChartBar />,
    href: '/list/summarycards',
  },
  {
    title: 'Trophies',
    description: 'Dynamically generated github trophies.',
    icon: <Trophy />,
    href: '/list/trophies',
  },
  {
    title: 'Stats',
    description: 'Dynamically generated stats for your github readmes.',
    icon: <ChartBar />,
    href: '/list/stats',
  },
  {
    title: 'Streaks',
    description: 'Dynamically generated streak card for your github profile.',
    icon: <Flame />,
    href: '/list/streaks',
  },
];

function CatalogSection() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {ListPages.map((item) => (
        <CatalogItem key={item.title} {...item} />
      ))}
    </ul>
  );
}

export default CatalogSection;
