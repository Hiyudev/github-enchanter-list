import { useTheme } from 'next-themes';
import { Moon, Sun } from 'phosphor-react';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const currentThemeLogo =
    theme === 'light' ? <Sun size={24} /> : <Moon size={24} />;

  const handlechangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      className="fancy-ring fancy-ring-bg flex items-center justify-center rounded-md transition-colors hover:text-primary-500 focus:text-primary-500"
      aria-label="Switch the page theme"
      onClick={handlechangeTheme}
    >
      {currentThemeLogo}
    </button>
  );
}

export default ThemeSwitcher;
