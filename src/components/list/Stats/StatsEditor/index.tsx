import { ChartBar, GithubLogo, PushPin, User } from 'phosphor-react';
import { useEffect, useState } from 'react';
import shallow from 'zustand/shallow';
import { Option } from '../../../../@types';
import useDebounce from '../../../../hooks/useDebounce';
import { useEditor } from '../../../../lib/stores/editorStore';
import { useStats } from '../../../../lib/stores/statsStore';
import { Input } from '../../../common/Input';
import Options from '../../../common/Options';
import Switch from '../../../common/Switch';
import EditorCopyOptions from '../../../sections/EditorCopyOptions';

const statsOptions = [
  {
    icon: <PushPin />,
    label: 'Project pin',
    value:
      'https://github-readme-stats.vercel.app/api/pin/?username={username}&theme={theme}&repo={repo}',
    defaultSelected: true,
  },
  {
    icon: <User />,
    label: 'User stats',
    value:
      'https://github-readme-stats.vercel.app/api?username={username}&theme={theme}&show_icons=true',
  },
  {
    icon: <ChartBar />,
    label: 'Top languages',
    value:
      'https://github-readme-stats.vercel.app/api/top-langs/?username={username}&theme={theme}',
  },
];

function StatsEditor() {
  const [username, setUsername] = useState('');
  const [repository, setRepository] = useState('');
  const debouncedUsername = useDebounce(username, 500);
  const debouncedRepository = useDebounce(repository, 500);

  const setGithubUsername = useEditor((state) => state.setGithubUsername);
  const {
    setUrl,
    name,
    setName,
    setReponame,
    reponame,
    hideBorder,
    setHideBorder,
    compact,
    setCompact,
  } = useStats(
    (state) => ({
      setUrl: state.setUrl,
      setName: state.setName,
      name: state.name,
      setReponame: state.setReponame,
      reponame: state.reponame,
      hideBorder: state.hideBorder,
      setHideBorder: state.setHideBorder,
      compact: state.compact,
      setCompact: state.setCompact,
    }),
    shallow
  );

  const handleSelectTypeOption = (selected: Option) => {
    setUrl(selected.value);
    setName(selected.label);
  };

  const handleHideBorderOptionChange = (hideBorder: boolean) => {
    setHideBorder(hideBorder);
  };

  const handleCompactOptionChange = (compact: boolean) => {
    setCompact(compact);
  };

  useEffect(() => {
    setGithubUsername(debouncedUsername);
  }, [debouncedUsername, setGithubUsername]);

  useEffect(() => {
    setReponame(debouncedRepository);
  }, [debouncedRepository, setReponame]);

  return (
    <section className="flex flex-col gap-4">
      <p className="text-secondary">Github username</p>
      <Input
        onChange={(e) => setUsername(e.target.value)}
        icon={<GithubLogo />}
        placeholder="Github username"
      />

      {name == 'Project pin' && (
        <>
          <p className="text-secondary">Repository name</p>
          <Input
            onChange={(e) => setRepository(e.target.value)}
            icon={<GithubLogo />}
            placeholder="Repository name"
            defaultValue={reponame}
          />
        </>
      )}

      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex flex-row items-center justify-between gap-2">
          <p className="text-secondary">Hide border</p>
          <Switch
            handleCheckChange={handleHideBorderOptionChange}
            aria-label="Switch transparent background option"
            defaultChecked={hideBorder}
          />
        </div>

        {name == 'Top languages' && (
          <div className="flex flex-row items-center justify-between gap-2">
            <p className="text-secondary">Compact mode</p>
            <Switch
              handleCheckChange={handleCompactOptionChange}
              aria-label="Switch transparent background option"
              defaultChecked={compact}
            />
          </div>
        )}
      </div>

      <p className="text-secondary">Summary card type</p>
      <Options onSelectOption={handleSelectTypeOption} options={statsOptions} />

      <p className="text-secondary">Copy as</p>
      <EditorCopyOptions />
    </section>
  );
}

export default StatsEditor;
