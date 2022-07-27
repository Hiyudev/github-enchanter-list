import { FileHtml, Link, TextAlignCenter } from 'phosphor-react';
import { Option } from '../../../@types';
import { useCopy } from '../../../lib/stores/copyStore';
import Options from '../../common/Options';

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
function EditorCopyOptions() {
  const setCopyAs = useCopy((state) => state.setCopyAs);

  const handleSelectCopy = (selected: Option) => {
    setCopyAs(selected.value);
  };

  return (
    <>
      <Options
        aria-label="Switch copy as options"
        options={copyOptions}
        onSelectOption={handleSelectCopy}
      />
    </>
  );
}

export default EditorCopyOptions;
