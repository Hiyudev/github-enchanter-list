import { MagnifyingGlass } from 'phosphor-react';
import { BadgeStyles, Option } from '../../../../@types';
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
  const setStyle = useBadge((state) => state.setStyle);
  const setSearch = useEditor((state) => state.setSearch);

  const handleSelectOption = (selected: Option) => {
    setStyle(selected.value as BadgeStyles);
  };
  const onInputChange = (query: string) => {
    setSearch(query);
  };

  return (
    <section className="space-y-4">
      <Options options={styleOptions} onSelectOption={handleSelectOption} />

      <Input
        icon={<MagnifyingGlass weight="bold" />}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Search for badges..."
      />
    </section>
  );
}

export default BadgeEditor;
