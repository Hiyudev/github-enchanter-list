import CatalogItem from './CatalogItem';

export type Page = {
  title: string;
  description: string;
  imageURL: string;
  href: string;
  alt: string;
};

const ListPages: Page[] = [
  {
    title: 'Badges',
    description: 'List of badges to use in your readme page',
    imageURL: '/images/Thumbnail.png',
    alt: 'Badge thumbnail',
    href: '/list/badges',
  },
  {
    title: 'Badges',
    description: 'List of badges to use in your readme page',
    imageURL: '/images/Thumbnail.png',
    alt: 'Badge thumbnail',
    href: '/list/badges',
  },
  {
    title: 'Badges',
    description: 'List of badges to use in your readme page',
    imageURL: '/images/Thumbnail.png',
    alt: 'Badge thumbnail',
    href: '/list/badges',
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
