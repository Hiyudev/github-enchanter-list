import classNames from 'classnames';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Copy, GithubLogo } from 'phosphor-react';
import { toast } from 'react-toastify';
import shallow from 'zustand/shallow';
import { useEditor } from '../../../../lib/stores/editorStore';
import { useStats } from '../../../../lib/stores/statsStore';
import { urls } from '../../../../utils/url';

const statsTheme = [
  'default',
  'default_repocard',
  'dark',
  'radical',
  'merko',
  'gruvbox',
  'gruvbox_light',
  'tokyonight',
  'onedark',
  'cobalt',
  'synthwave',
  'highcontrast',
  'dracula',
  'prussian',
  'monokai',
  'vue',
  'vue-dark',
  'shades-of-purple',
  'nightowl',
  'buefy',
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
  'slateorange',
  'kacho_ga',
  'outrun',
  'ocean_dark',
  'city_lights',
  'github_dark',
  'discord_old_blurple',
  'aura_dark',
  'panda',
  'noctis_minimus',
  'cobalt2',
  'swift',
  'aura',
  'apprentice',
  'moltack',
  'codeSTACKr',
  'rose_pine',
];

function StatsList() {
  const { copyAs, githubUsername } = useEditor(
    (state) => ({
      copyAs: state.copyAs,
      githubUsername: state.githubUsername,
    }),
    shallow
  );
  const { url, reponame, hideBorder, name, compact } = useStats(
    (state) => ({
      name: state.name,
      url: state.url,
      reponame: state.reponame,
      hideBorder: state.hideBorder,
      compact: state.compact,
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

  if (!!!githubUsername || (name == 'Project pin' && reponame.length == 0)) {
    return (
      <div className="border-secondary flex h-72 flex-col items-center justify-center rounded-md border">
        <GithubLogo />
        <h2 className="text-secondary">Please insert a github username</h2>
      </div>
    );
  }

  return (
    <ul className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
      {statsTheme.map((theme, index) => {
        const replacedUrl = url
          .replaceAll('{username}', githubUsername)
          .replaceAll('{theme}', theme)
          .replaceAll('{repo}', reponame);

        const apiUrl = urls(replacedUrl, {
          'hide_border=true': hideBorder,
          'layout=compact': compact,
        });

        return (
          <li className="flex" key={index}>
            <button
              aria-label={`Copy ${name} badge with ${theme} theme`}
              className="bg-primary border-secondary group relative flex-1 rounded-xl border p-4 outline-none"
              onClick={() => handleClick(apiUrl)}
            >
              <div className="fancy-gradient absolute inset-0.5 -z-10 rounded-md opacity-0 blur transition-opacity group-hover:opacity-75 group-focus:opacity-75" />

              <div
                className={classNames(
                  'relative flex items-center justify-center',
                  {
                    'h-32': !(!compact && name == 'Top languages'),
                    'h-60': !compact && name == 'Top languages',
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
                  alt={`${name} badge with ${theme} theme`}
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

export default StatsList;
