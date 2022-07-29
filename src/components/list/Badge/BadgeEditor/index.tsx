import { MagnifyingGlass, TextAlignLeft, TextAlignRight } from 'phosphor-react';
import { useEffect, useState } from 'react';
import shallow from 'zustand/shallow';
import { BadgeStyles, Option } from '../../../../@types';
import useDebounce from '../../../../hooks/useDebounce';
import { useBadge } from '../../../../lib/stores/badgeStore';
import { ColorInput, Input } from '../../../common/Input';
import Options from '../../../common/Options';
import Switch from '../../../common/Switch';
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

const customOptions = [
  {
    label: 'Brand names',
    value: 'brand',
    defaultSelected: true,
  },
  {
    label: 'Icon names',
    value: 'custom',
  },
];

function BadgeEditor() {
  const [searchinput, setSearchInput] = useState<string>('');
  const debouncedSearchInput = useDebounce<string>(searchinput, 150);

  const {
    setStyle,
    setSearch,
    setLabel,
    setMessage,
    label,
    message,
    custom,
    setCustom,
    setUseLabelColor,
    setUseMessageColor,
    useLabelColor,
    useMessageColor,
    labelColor,
    messageColor,
    setLabelColor,
    setMessageColor,
  } = useBadge(
    (state) => ({
      setSearch: state.setSearch,
      setLabel: state.setLabel,
      setMessage: state.setMessage,
      setStyle: state.setStyle,
      label: state.label,
      message: state.message,
      custom: state.custom,
      setCustom: state.setCustom,
      setUseLabelColor: state.setUseLabelColor,
      setUseMessageColor: state.setUseMessageColor,
      useLabelColor: state.useLabelColor,
      useMessageColor: state.useMessageColor,
      labelColor: state.labelColor,
      messageColor: state.messageColor,
      setLabelColor: state.setLabelColor,
      setMessageColor: state.setMessageColor,
    }),
    shallow
  );

  const handleSelectStyle = (selected: Option) => {
    setStyle(selected.value as BadgeStyles);
  };

  const handleSelectIcon = (selected: Option) => {
    setCustom(selected.value == 'custom');
  };

  const handleUseCheckLabelColor = (checked: boolean) => {
    setUseLabelColor(checked);
  };

  const handleUseCheckMessageColor = (checked: boolean) => {
    setUseMessageColor(checked);
  };

  const handleLabelColor = (color: string) => {
    setLabelColor(color);
  };

  const handleMessageColor = (color: string) => {
    setMessageColor(color);
  };

  useEffect(() => {
    setSearch(debouncedSearchInput);
  }, [debouncedSearchInput, setSearch]);

  return (
    <section className="space-y-4">
      <p className="text-secondary">Icons</p>
      <Options
        aria-label="Switch badge icons options"
        options={customOptions}
        onSelectOption={handleSelectIcon}
      />

      <p className="text-secondary">Badge styles</p>
      <Options
        aria-label="Switch badge style options"
        options={styleOptions}
        onSelectOption={handleSelectStyle}
      />

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1 space-y-4">
          <p className="text-secondary">Label</p>

          <div>
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

          <div className="flex flex-row items-center justify-between gap-2">
            <p className="text-secondary">Change label color</p>
            <Switch
              handleCheckChange={handleUseCheckLabelColor}
              aria-label="Switch use color on label option"
              defaultChecked={useLabelColor}
            />
          </div>

          {useLabelColor && (
            <ColorInput
              defaultColor={labelColor}
              onColorChange={handleLabelColor}
            />
          )}
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-secondary">Message</p>

          <div>
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

          <div className="flex flex-row items-center justify-between gap-2">
            <p className="text-secondary">Change message color</p>
            <Switch
              handleCheckChange={handleUseCheckMessageColor}
              aria-label="Switch use color on message option"
              defaultChecked={useMessageColor}
            />
          </div>

          {useMessageColor && (
            <ColorInput
              defaultColor={messageColor}
              onColorChange={handleMessageColor}
            />
          )}
        </div>
      </div>

      <Input
        icon={<MagnifyingGlass weight="bold" />}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder={custom ? 'Search for icons...' : 'Search for brands...'}
      />

      <p className="text-secondary">Copy as</p>
      <EditorCopyOptions />
    </section>
  );
}

export default BadgeEditor;
