import Link from 'next/link';
import LogoIcon from '../../icons/Logo';
import ThemeSwitcher from './ThemeSwitcher';

function Navbar() {
  return (
    <nav className="bg-primary fixed top-0 z-50 flex h-[70px] w-full flex-row items-center justify-between p-5 sm:px-10 md:px-12 lg:px-24 xl:px-48">
      <Link href="/" passHref>
        <a
          aria-label="Go back to the home"
          className="fancy-ring fancy-ring-bg flex items-center justify-center rounded-md transition-colors hover:text-primary-500 focus:text-primary-500"
        >
          <LogoIcon size={24} />
        </a>
      </Link>

      <div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
