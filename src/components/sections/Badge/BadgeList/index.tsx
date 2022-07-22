import { useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useSWRInfinite from 'swr/infinite';
import { useBadge } from '../../../../lib/stores/badgeStore';
import { useEditor } from '../../../../lib/stores/editorStore';
import { urls } from '../../../../utils/url';
import BadgeCard, { BadgeCardSkeleton } from './BadgeCard';

function BadgeList() {
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
  const style = useBadge((state) => state.style);
  const search = useEditor((state) => state.search);

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.badges.length) return null;

    const apiUrl = urls(
      `/api/badges?page=${pageIndex}&limit=${itemsQuantity}&style=${style}`,
      {
        [`search=${search}`]: search.length > 0,
      }
    );
    return apiUrl;
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  const currentBadgeLength = useMemo(() => {
    if (!data) return 0;
    return data.map((res) => res.badges.length).reduce((a, b) => a + b, 0);
  }, [data]);

  const maxBadgeLength = useMemo(() => {
    if (!data) return 0;
    return data[0].total;
  }, [data]);

  if (!data) return <BadgeCardSkeletonList />;

  return (
    <InfiniteScroll
      className="mb-8 !overflow-visible"
      dataLength={currentBadgeLength}
      next={() => {
        setSize(size + 1);
      }}
      hasMore={maxBadgeLength > currentBadgeLength}
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
