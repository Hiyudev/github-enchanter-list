import { MagnifyingGlass } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { BadgeStyles, Option } from '../../../../@types';
import useDebounce from '../../../../hooks/useDebounce';
import { useBadge } from '../../../../lib/stores/badgeStore';
import { useEditor } from '../../../../lib/stores/editorStore';
import { Input } from '../../../common/Input';
import Options from '../../../common/Options';

const styleOptions = [
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
];

function BadgeEditor() {
  const [searchinput, setSearchInput] = useState<string>('');
  const debouncedSearchInput = useDebounce<string>(searchinput, 150);

  const setStyle = useBadge((state) => state.setStyle);
  const setSearch = useEditor((state) => state.setSearch);

  const handleSelectOption = (selected: Option) => {
    setStyle(selected.value as BadgeStyles);
  };

  useEffect(() => {
    setSearch(debouncedSearchInput);
  }, [debouncedSearchInput, setSearch]);

  return (
    <section className="space-y-4">
      <Options options={styleOptions} onSelectOption={handleSelectOption} />

      <Input
        icon={<MagnifyingGlass weight="bold" />}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for badges..."
      />
    </section>
  );
}

export default BadgeEditor;
