import ThemeToggle from '../ThemeToggle';
import NavLinkItem from './NavLinkItem';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 my-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <nav>
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/about">About</NavLinkItem>
      </nav>
      <ThemeToggle />
    </header>
  );
}
