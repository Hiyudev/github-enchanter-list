import { SimpleIcon } from '../../../types';
import BannerCard from './BannerCard';

interface IBannerListProps {
  icons: SimpleIcon[];
}

function BannerList({ icons }: IBannerListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {icons.slice(0, 10).map((icon, index) => {
        return <BannerCard {...icon} key={index} />;
      })}
    </ul>
  );
}

export default BannerList;
