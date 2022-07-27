import classNames from 'classnames';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Copy } from 'phosphor-react';
import { toast } from 'react-toastify';
import shallow from 'zustand/shallow';
import { useEditor } from '../../../../lib/stores/editorStore';
import { useTrophy } from '../../../../lib/stores/trophyStore';
import { urls } from '../../../../utils/url';

const TrophiesTheme = [
  'flat',
  'onedark',
  'gruvbox',
  'dracula',
  'monokai',
  'chalk',
  'nord',
  'alduin',
  'darkhub',
  'juicyfresh',
  'buddhism',
  'oldie',
  'radical',
  'onestar',
  'discord',
  'algolia',
  'gitdimmed',
  'tokyonight',
  'matrix',
  'apprentice',
  'dark_dimmed',
  'dark_lover',
];

function TrophiesList() {
  const { copyAs, githubUsername } = useEditor(
    (state) => ({
      copyAs: state.copyAs,
      githubUsername: state.githubUsername,
    }),
    shallow
  );
  const { transparentBackground, frame, rows, columns } = useTrophy(
    (state) => ({
      transparentBackground: state.transparentBackground,
      frame: state.frame,
      rows: state.rows,
      columns: state.columns,
    })
  );

  const { theme } = useTheme();

  const copyToClipboard = (url: string) => {
    let clipbaordText = '';

    switch (copyAs) {
      case 'link':
        clipbaordText = url;
        break;
      case 'html':
        clipbaordText = `<img src="${url}" alt="${githubUsername} trophies"/>`;
        break;
      case 'markdown':
        clipbaordText = `![${githubUsername} trophies](${url})`;
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
        TrophiesTheme.map((theme, index) => {
          const url = `https://github-profile-trophy.vercel.app/?username=${githubUsername}&theme=${theme}&row=${rows}&column=${columns}`;
          const apiUrl = urls(url, {
            'no-bg=true': transparentBackground,
            'no-frame=true': frame,
          });

          return (
            <li className="flex" key={index}>
              <button
                aria-label={`Copy trophy badge`}
                className="bg-primary border-secondary group relative flex-1 rounded-xl border p-4 outline-none"
                onClick={() => handleClick(apiUrl)}
              >
                <div className="fancy-gradient absolute inset-0.5 -z-10 rounded-md opacity-0 blur transition-opacity group-hover:opacity-75 group-focus:opacity-75" />

                <div
                  className={classNames(
                    'relative flex items-center justify-center',
                    {
                      'h-32': rows == 1,
                      'h-48': rows == 2,
                      'h-64': rows == 3,
                      'h-72': rows == 4,
                      'h-80': rows == 5,
                      'h-96': rows == 6,
                    }
                  )}
                >
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
                    alt={''}
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

export default TrophiesList;

// https://github-profile-trophy.vercel.app/?username=ryo-ma
