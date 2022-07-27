import { GithubLogo } from 'phosphor-react';
import { useEffect, useState } from 'react';
import shallow from 'zustand/shallow';
import { Option } from '../../../../@types';
import useDebounce from '../../../../hooks/useDebounce';
import { useEditor } from '../../../../lib/stores/editorStore';
import { useSummary } from '../../../../lib/stores/summaryStore';
import { Input } from '../../../common/Input';
import Options from '../../../common/Options';
import EditorCopyOptions from '../../../sections/EditorCopyOptions';

const typeOptions = [
  {
    label: 'Profile details',
    value:
      'http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username={username}&theme={theme}',
    defaultSelected: true,
  },
  {
    label: 'Top languages by repo',
    value:
      'http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username={username}&theme={theme}',
  },
  {
    label: 'Top languages by commit',
    value:
      'http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username={username}&theme={theme}',
  },
  {
    label: 'General stats',
    value:
      'http://github-profile-summary-cards.vercel.app/api/cards/stats?username={username}&theme={theme}',
  },
  {
    label: 'Commits per day',
    value:
      'http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username={username}&theme={theme}&utcOffset=8',
  },
];

function SummaryCardEditor() {
  const [username, setUsername] = useState('');
  const debouncedUsername = useDebounce(username, 500);
  const { setUrl, setName } = useSummary(
    (state) => ({
      setUrl: state.setUrl,
      setName: state.setName,
    }),
    shallow
  );

  const setGithubUsername = useEditor((state) => state.setGithubUsername);

  const handleSelectTypeOption = (selected: Option) => {
    setUrl(selected.value);
    setName(selected.label);
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

      <p className="text-secondary">Summary card type</p>
      <Options onSelectOption={handleSelectTypeOption} options={typeOptions} />

      <p className="text-secondary">Copy as</p>
      <EditorCopyOptions />
    </section>
  );
}

export default SummaryCardEditor;
