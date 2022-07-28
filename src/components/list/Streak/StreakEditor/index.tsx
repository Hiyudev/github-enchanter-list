import { GithubLogo } from 'phosphor-react';
import { useEffect, useState } from 'react';
import useDebounce from '../../../../hooks/useDebounce';
import { useEditor } from '../../../../lib/stores/editorStore';
import { useStreak } from '../../../../lib/stores/streakStore';
import { Input } from '../../../common/Input';
import Switch from '../../../common/Switch';
import EditorCopyOptions from '../../../sections/EditorCopyOptions';

function StreakEditor() {
  const [username, setUsername] = useState('');
  const debouncedUsername = useDebounce(username, 500);

  const setGithubUsername = useEditor((state) => state.setGithubUsername);
  const { hideBorder, setHideBorder } = useStreak((state) => ({
    setHideBorder: state.setHideBorder,
    hideBorder: state.hideBorder,
  }));

  const handleHideBorderOptionChange = (checked: boolean) => {
    setHideBorder(checked);
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

      <div className="flex flex-row items-center justify-between gap-2">
        <p className="text-secondary">Hide border</p>
        <Switch
          handleCheckChange={handleHideBorderOptionChange}
          aria-label="Switch hide border option"
          defaultChecked={hideBorder}
        />
      </div>

      <p className="text-secondary">Copy as</p>
      <EditorCopyOptions />
    </section>
  );
}

export default StreakEditor;
