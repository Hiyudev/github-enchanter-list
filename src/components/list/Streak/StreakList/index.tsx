import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Copy, GithubLogo } from 'phosphor-react';
import { toast } from 'react-toastify';
import shallow from 'zustand/shallow';

import { useEditor } from '../../../../lib/stores/editorStore';
import { useStreak } from '../../../../lib/stores/streakStore';
import { urls } from '../../../../utils/url';

const StreakCardsTheme = [
  'default',
  'dark',
  'highcontrast',
  'radical',
  'merko',
  'gruvbox',
  'gruvbox_duo',
  'tokyonight',
  'tokyonight_duo',
  'onedark',
  'onedark_duo',
  'cobalt',
  'synthwave',
  'dracula',
  'prussian',
  'monokai',
  'vue',
  'vue-dark',
  'shades-of-purple',
  'nightowl',
  'buefy',
  'buefy-dark',
  'blue-green',
  'algolia',
  'great-gatsby',
  'darcula',
  'bear',
  'solarized-dark',
  'solarized-light',
  'chartreuse-dark',
  'nord',
  'gotham',
  'material-palenight',
  'graywhite',
  'vision-friendly-dark',
  'ayu-mirage',
  'midnight-purple',
  'calm',
  'flag-india',
  'omni',
  'react',
  'jolly',
  'maroongold',
  'yeblu',
  'blueberry',
  'blueberry_duo',
  'slateorange',
  'kacho_ga',
  'ads-juicy-fresh',
  'black-ice',
  'soft-green',
  'blood',
  'blood-dark',
  'green_nur',
  'neon-dark',
  'neon-palenight',
  'dark-smoky',
  'monokai-metallian',
  'city-lights',
  'blux',
  'earth',
  'deepBlue',
  'holi-theme',
  'ayu-light',
  'javascript',
  'javascript-dark',
  'noctis-minimus',
  'github-dark',
  'github-dark-blue',
  'github-light',
  'elegant',
  'leafy',
  'navy-gear',
  'hacker',
  'garden',
  'github-green-purple',
  'icegray',
  'neon_blurange',
  'yellowdark',
  'java-dark',
  'android-dark',
];

function StreakList() {
  const { copyAs, githubUsername } = useEditor(
    (state) => ({
      copyAs: state.copyAs,
      githubUsername: state.githubUsername,
    }),
    shallow
  );
  const hideBorder = useStreak((state) => state.hideBorder);
  const { theme } = useTheme();

  const copyToClipboard = (url: string) => {
    let clipbaordText = '';

    switch (copyAs) {
      case 'link':
        clipbaordText = url;
        break;
      case 'html':
        clipbaordText = `<img src="${url}" alt="${githubUsername} streak badge"/>`;
        break;
      case 'markdown':
        clipbaordText = `![${githubUsername} streak badge](${url})`;
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
    <>
      {!!githubUsername ? (
        <ul className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {StreakCardsTheme.map((theme, index) => {
            const url = `https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=${theme}`;
            const apiUrl = urls(url, {
              'hide_border=true': hideBorder,
            });

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
      ) : (
        <div className="border-secondary flex h-72 flex-col items-center justify-center rounded-md border">
          <GithubLogo />
          <h2 className="text-secondary">Please insert a github username</h2>
        </div>
      )}
    </>
  );
}

export default StreakList;
