import { useTheme } from '../context/theme/useThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-primary-light dark:bg-primary-dark text-background-light dark:text-background-dark cursor-pointer"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
