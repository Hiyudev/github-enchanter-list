import InfiniteScroll from 'react-infinite-scroll-component';
import useSWRInfinite from 'swr/infinite';
import BadgeCard, { BadgeCardSkeleton } from './BadgeCard';

function BadgeList() {
  const itemsQuantity = 36;

  const getIcons = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/api/badges?page=${pageIndex}&limit=${itemsQuantity}`;
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, size, setSize } = useSWRInfinite(getIcons, fetcher);
  if (!data)
    return (
      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array(itemsQuantity)
          .fill(1)
          .map((_, index) => {
            return <BadgeCardSkeleton key={index} />;
          })}
      </ul>
    );

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={() => setSize(size + 1)}
      hasMore={true}
      loader={
        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array(itemsQuantity)
            .fill(1)
            .map((_, index) => {
              return <BadgeCardSkeleton key={index} />;
            })}
        </ul>
      }
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((badges, index) => {
          return badges.map((badge) => (
            <BadgeCard {...badge} key={badge.name} />
          ));
        })}
      </ul>
    </InfiniteScroll>
  );
}

export default BadgeList;
