import { ChartBar, FlagBanner, Trophy } from 'phosphor-react';
import { Page } from '../../../@types';
import CatalogItem from './CatalogItem';

export const ListPages: Page[] = [
  {
    title: 'Badges',
    description: 'List of concise, consistent, and legible badges.',
    icon: <FlagBanner />,
    href: '/list/badges',
  },
  {
    title: 'Summary cards',
    description: 'List of summary cards for profile.',
    icon: <ChartBar />,
    href: '/list/summarycards',
  },
  {
    title: 'Trophies',
    description: 'List of dynamically generated GitHub Stat Trophies.',
    icon: <Trophy />,
    href: '/list/trophies',
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
