import { MagnifyingGlass, TextAlignLeft, TextAlignRight } from 'phosphor-react';
import { useEffect, useState } from 'react';
import shallow from 'zustand/shallow';
import { BadgeStyles, Option } from '../../../../@types';
import useDebounce from '../../../../hooks/useDebounce';
import { useBadge } from '../../../../lib/stores/badgeStore';
import { Input } from '../../../common/Input';
import Options from '../../../common/Options';
import EditorCopyOptions from '../../../sections/EditorCopyOptions';

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

  const { setStyle, setSearch, setLabel, setMessage, label, message } =
    useBadge(
      (state) => ({
        setSearch: state.setSearch,
        setLabel: state.setLabel,
        setMessage: state.setMessage,
        setStyle: state.setStyle,
        label: state.label,
        message: state.message,
      }),
      shallow
    );

  const handleSelectStyle = (selected: Option) => {
    setStyle(selected.value as BadgeStyles);
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

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1 space-y-4">
          <p className="text-secondary">Label</p>

          <Input
            onChange={(e) => setLabel(e.target.value)}
            icon={<TextAlignLeft />}
            placeholder="Label"
            defaultValue={label}
          />
          <small className="text-secondary">
            Use <code>{'{slug}'}</code> to replace it with the brand name.
          </small>
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-secondary">Message</p>
          <Input
            onChange={(e) => setMessage(e.target.value)}
            icon={<TextAlignRight />}
            placeholder="Message"
            defaultValue={message}
          />
          <small className="text-secondary">
            Use <code>{'{slug}'}</code> to replace it with the brand name.
          </small>
        </div>
      </div>

      <Input
        icon={<MagnifyingGlass weight="bold" />}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for badges..."
      />

      <p className="text-secondary">Copy as</p>
      <EditorCopyOptions />
    </section>
  );
}

export default BadgeEditor;
