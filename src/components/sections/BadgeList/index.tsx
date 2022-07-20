import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useSWRInfinite from 'swr/infinite';
import { BadgeStyles, Option } from '../../../@types';
import { Input } from '../../common/Input';
import Options from '../../common/Options';
import BadgeCard, { BadgeCardSkeleton } from './BadgeCard';

function BadgeList() {
  const [style, setStyle] = useState<BadgeStyles>('flat');
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
    return `/api/badges?page=${pageIndex}&limit=${itemsQuantity}&style=${style}`;
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const handleSelectOption = (option: Option) => {
    setStyle(option.value as BadgeStyles);
  };

  const { data, size, setSize } = useSWRInfinite(getIcons, fetcher);

  if (!data) return <BadgeCardSkeletonList />;

  return (
    <>
      <section className="space-y-4">
        <Options
          options={[
            {
              label: 'Plastic',
              value: 'plastic',
              defaultSelected: true,
            },
            {
              label: 'Flat',
              value: 'flat',
            },
            {
              label: 'Flat square',
              value: 'flat-square',
            },
            {
              label: 'For the badge',
              value: 'for-the-badge',
            },
            {
              label: 'Social',
              value: 'social',
            },
          ]}
          onSelectOption={handleSelectOption}
        />

        <Input
          icon={<MagnifyingGlass weight="bold" />}
          placeholder="Search..."
        />
      </section>

      <InfiniteScroll
        dataLength={data.length}
        next={() => setSize(size + 1)}
        hasMore={true}
        loader={<BadgeCardSkeletonList />}
      >
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((badges) => {
            return badges.map((badge) => (
              <BadgeCard style={style} {...badge} key={badge.name} />
            ));
          })}
        </ul>
      </InfiniteScroll>
    </>
  );
}

export default BadgeList;
