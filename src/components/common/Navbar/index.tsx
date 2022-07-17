import LogoIcon from '../../icons/Logo';
import ThemeSwitcher from './ThemeSwitcher';

function Navbar() {
  return (
    <nav className="bg-primary fixed top-0 z-50 flex w-full flex-row items-center justify-between p-5 sm:px-10 md:px-12 lg:px-24 xl:px-48">
      <div>
        <LogoIcon size={32} />
      </div>

      <div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
