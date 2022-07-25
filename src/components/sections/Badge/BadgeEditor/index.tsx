import {
  FileHtml,
  Link,
  MagnifyingGlass,
  TextAlignCenter,
  TextAlignLeft,
  TextAlignRight,
} from 'phosphor-react';
import { useEffect, useState } from 'react';
import shallow from 'zustand/shallow';
import { BadgeStyles, Option } from '../../../../@types';
import useDebounce from '../../../../hooks/useDebounce';
import { useBadge } from '../../../../lib/stores/badgeStore';
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

const copyOptions = [
  {
    icon: <Link />,
    label: 'Copy as link',
    value: 'link',
    defaultSelected: true,
  },
  {
    icon: <FileHtml />,
    label: 'Copy as HTML',
    value: 'html',
  },
  {
    icon: <TextAlignCenter />,
    label: 'Copy as Markdown',
    value: 'markdown',
  },
];

function BadgeEditor() {
  const [searchinput, setSearchInput] = useState<string>('');
  const debouncedSearchInput = useDebounce<string>(searchinput, 150);

  const { setStyle, setCopyAs, setSearch, setLabel, setMessage } = useBadge(
    (state) => ({
      setSearch: state.setSearch,
      setCopyAs: state.setCopyAs,
      setLabel: state.setLabel,
      setMessage: state.setMessage,
      setStyle: state.setStyle,
    }),
    shallow
  );

  const handleSelectStyle = (selected: Option) => {
    setStyle(selected.value as BadgeStyles);
  };

  const handleSelectCopy = (selected: Option) => {
    setCopyAs(selected.value);
  };

  useEffect(() => {
    setSearch(debouncedSearchInput);
  }, [debouncedSearchInput, setSearch]);

  return (
    <section className="space-y-4">
      <p className="text-secondary">Badge styles</p>
      <Options
        aria-label="Switch badge style options"
        options={styleOptions}
        onSelectOption={handleSelectStyle}
      />

      <p className="text-secondary">Copy as</p>
      <Options
        aria-label="Switch copy as options"
        options={copyOptions}
        onSelectOption={handleSelectCopy}
      />

      <div className="flex flex-col gap-4 md:flex-row">
        <Input
          onChange={(e) => setLabel(e.target.value)}
          icon={<TextAlignLeft />}
          placeholder="Label"
        />
        <Input
          onChange={(e) => setMessage(e.target.value)}
          icon={<TextAlignRight />}
          placeholder="Message"
        />
      </div>
      <small className="text-secondary">
        Use <code>{'{slug}'}</code> to replace it with the brand name.
      </small>

      <Input
        icon={<MagnifyingGlass weight="bold" />}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for badges..."
      />
    </section>
  );
}

export default BadgeEditor;
