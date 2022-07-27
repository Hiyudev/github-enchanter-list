import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Copy } from 'phosphor-react';
import { toast } from 'react-toastify';
import shallow from 'zustand/shallow';

import { useEditor } from '../../../../lib/stores/editorStore';
import { useSummary } from '../../../../lib/stores/summaryStore';

const SummaryCardsTheme = [
  'default',
  '2077',
  'dracula',
  'github',
  'github_dark',
  'gruvbox',
  'monokai',
  'nord_bright',
  'nord_dark',
  'radical',
  'solarized',
  'solarized_dark',
  'tokyonight',
  'vue',
  'zenburn',
];

function SummaryCardsList() {
  const { url, name } = useSummary(
    (state) => ({
      url: state.url,
      name: state.name,
    }),
    shallow
  );
  const { copyAs, githubUsername } = useEditor(
    (state) => ({
      copyAs: state.copyAs,
      githubUsername: state.githubUsername,
    }),
    shallow
  );
  const { theme } = useTheme();

  const copyToClipboard = (url: string) => {
    let clipbaordText = '';

    switch (copyAs) {
      case 'link':
        clipbaordText = url;
        break;
      case 'html':
        clipbaordText = `<img src="${url}" alt="${name} badge"/>`;
        break;
      case 'markdown':
        clipbaordText = `![${name}](${url})`;
        break;
      default:
        break;
    }

    navigator.clipboard.writeText(clipbaordText);
  };

  const handleClick = (url: string) => {
    copyToClipboard(url);
    toast(`Copied badge to your clipboard`, {
      type: 'success',
      theme: theme == 'light' ? 'light' : 'dark',
    });
  };

  return (
    <ul className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
      {!!githubUsername &&
        url &&
        SummaryCardsTheme.map((theme, index) => {
          const apiUrl = url
            .replaceAll('{username}', githubUsername)
            .replaceAll('{theme}', theme);

          return (
            <li className="flex" key={index}>
              <button
                aria-label={`Copy ${name} badge`}
                className="bg-primary border-secondary group relative flex-1 rounded-xl border p-4 outline-none"
                onClick={() => handleClick(apiUrl)}
              >
                <div className="fancy-gradient absolute inset-0.5 -z-10 rounded-md opacity-0 blur transition-opacity group-hover:opacity-75 group-focus:opacity-75" />

                <div className="relative flex h-32 items-center justify-center">
                  <div
                    aria-hidden
                    className="absolute z-20 hidden h-full w-full items-center justify-center group-hover:flex group-focus:flex"
                  >
                    <Copy />
                  </div>

                  <Image
                    objectFit="contain"
                    layout="fill"
                    className="group-hover:opacity-25 group-focus:opacity-25"
                    alt={`${name} badge`}
                    src={apiUrl}
                  />
                </div>
              </button>
            </li>
          );
        })}
    </ul>
  );
}

export default SummaryCardsList;
