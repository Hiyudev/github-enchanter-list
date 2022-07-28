import Link from 'next/link';
import { Code, GithubLogo, Heart } from 'phosphor-react';
import LogoIcon from '../../icons/Logo';

function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <Link href="/" passHref>
          <a
            aria-hidden
            className="fancy-ring fancy-ring-bg mx-auto flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:text-primary-500 focus:text-primary-500"
          >
            <LogoIcon size={24} />
          </a>
        </Link>

        <p className="text-secondary mt-6 text-center leading-relaxed">
          List of cool static and dynamic badges for your README
        </p>

        <p className="text-secondary mt-6 flex flex-row items-center justify-center gap-1 text-sm leading-relaxed">
          Created with
          <Heart
            aria-hidden
            className="transition-colors hover:text-primary-500"
            weight="bold"
          />
          <span className="sr-only">heart</span>
          and
          <span className="sr-only">code</span>
          <Code
            aria-hidden
            className="transition-colors hover:text-primary-500"
            weight="bold"
          />{' '}
          by
          <a
            aria-label="Visit this website creator"
            href="https://github.com/Hiyudev"
            className="transition-colors hover:text-primary-500"
          >
            Kevin
          </a>
        </p>
        <p className="text-secondary flex justify-center text-sm leading-relaxed">
          2022 Kevin
        </p>

        <Link passHref href="https://github.com/Hiyudev/github-enchanter-list">
          <a className="bg-secondary fancy-ring fancy-ring-bg-secondary mx-auto flex h-12 w-12 items-center justify-center rounded-md transition-colors hover:text-primary-500 focus:text-primary-500">
            <GithubLogo size={24} weight="fill" />
          </a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
