import Link from 'next/link';
import { Page } from '../../../../@types';
import Card from '../../../common/Card';

function CatalogItem(item: Page) {
  return (
    <Link key={item.title} href={item.href} passHref>
      <a
        aria-label={`Go to ${item.title} list page`}
        className="bg-primary group relative flex outline-none"
      >
        <div className="fancy-gradient absolute inset-0.5 -z-10 rounded-md opacity-0 blur transition-opacity group-hover:opacity-75 group-focus:opacity-75" />
        <Card className="flex flex-1 flex-col gap-2">
          <div className="bg-secondary flex h-8 w-8 items-center justify-center rounded-md">
            {item.icon}
          </div>
          <div>
            <h3>{item.title}</h3>
            <p className="text-secondary text-sm">{item.description}</p>
          </div>
        </Card>
      </a>
    </Link>
  );
}

export default CatalogItem;
