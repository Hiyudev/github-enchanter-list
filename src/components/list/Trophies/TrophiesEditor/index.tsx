import { GithubLogo } from 'phosphor-react';
import { useEffect, useState } from 'react';
import shallow from 'zustand/shallow';
import useDebounce from '../../../../hooks/useDebounce';
import { useEditor } from '../../../../lib/stores/editorStore';
import { useTrophy } from '../../../../lib/stores/trophyStore';
import { Input } from '../../../common/Input';
import Slider from '../../../common/Slider';
import Switch from '../../../common/Switch';
import EditorCopyOptions from '../../../sections/EditorCopyOptions';

function TrophiesEditor() {
  const [username, setUsername] = useState('');
  const debouncedUsername = useDebounce(username, 500);
  const {
    setTransparentBackground,
    setFrame,
    setRows,
    setColumns,
    rows,
    columns,
  } = useTrophy(
    (state) => ({
      setTransparentBackground: state.setTransparentBackground,
      setFrame: state.setFrame,
      setRows: state.setRows,
      setColumns: state.setColumns,
      rows: state.rows,
      columns: state.columns,
    }),
    shallow
  );
  const setGithubUsername = useEditor((state) => state.setGithubUsername);

  const handleBackgroundOptionChange = (checked: boolean) => {
    setTransparentBackground(checked);
  };

  const handleFrameOptionChange = (checked: boolean) => {
    setFrame(checked);
  };

  const handleRowsChange = (rows: number) => {
    setRows(rows);
  };

  const handleColumnsChange = (columns: number) => {
    setColumns(columns);
  };

  useEffect(() => {
    setGithubUsername(debouncedUsername);
  }, [debouncedUsername, setGithubUsername]);

  return (
    <section className="flex flex-col gap-4">
      <p className="text-secondary">Github username</p>
      <Input
        onChange={(e) => setUsername(e.target.value)}
        icon={<GithubLogo />}
        placeholder="Github username"
      />

      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex flex-row items-center justify-between gap-2">
          <p className="text-secondary">Transparent background</p>
          <Switch
            handleCheckChange={handleBackgroundOptionChange}
            aria-label="Switch transparent background option"
          />
        </div>

        <div className="flex flex-row items-center justify-between gap-2">
          <p className="text-secondary">Frame</p>
          <Switch
            handleCheckChange={handleFrameOptionChange}
            aria-label="Switch frame option"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <p className="text-secondary">Rows ( {rows} )</p>
          <Slider
            defaultValue={1}
            min={1}
            onValueChange={handleRowsChange}
            max={6}
          />
        </div>

        <div className="flex-1">
          <p className="text-secondary">Columns ( {columns} )</p>
          <Slider
            min={1}
            onValueChange={handleColumnsChange}
            defaultValue={6}
            max={6}
          />
        </div>
      </div>

      <p className="text-secondary">Copy as</p>
      <EditorCopyOptions />
    </section>
  );
}

export default TrophiesEditor;
