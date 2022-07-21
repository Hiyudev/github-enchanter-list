import InfiniteScroll from 'react-infinite-scroll-component';
import useSWRInfinite from 'swr/infinite';
import { useBadge } from '../../../../lib/stores/badgeStore';
import { useEditor } from '../../../../lib/stores/editorStore';
import BadgeCard, { BadgeCardSkeleton } from './BadgeCard';

function BadgeList() {
  const style = useBadge((state) => state.style);
  const search = useEditor((state) => state.search);
  const itemsQuantity = 36;

  function BadgeCardSkeletonList() {
    return (
      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array(itemsQuantity)
          .fill(1)
          .map((_, index) => {
            return <BadgeCardSkeleton style={style} key={index} />;
          })}
      </ul>
    );
  }

  const getIcons = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/api/badges?page=${pageIndex}&limit=${itemsQuantity}&style=${style}&search=${search}`;
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, size, setSize } = useSWRInfinite(getIcons, fetcher);

  if (!data) return <BadgeCardSkeletonList />;

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={() => setSize(size + 1)}
      hasMore={data[0].total > size * itemsQuantity}
      loader={<BadgeCardSkeletonList />}
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((res) => {
          return res.badges.map((badge) => (
            <BadgeCard style={style} {...badge} key={badge.name} />
          ));
        })}
      </ul>
    </InfiniteScroll>
  );
}

export default BadgeList;
