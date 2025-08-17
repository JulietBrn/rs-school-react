import LanguageSwitcher from '../LanguageToggler';
import ThemeToggle from '../ThemeToggle';
import NavLinkItem from './NavLinkItem';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="flex justify-between items-center p-4 my-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <nav>
        <NavLinkItem to="/">{t('home')}</NavLinkItem>
        <NavLinkItem to="/about">{t('about')}</NavLinkItem>
      </nav>
      <LanguageSwitcher />
      <ThemeToggle />
    </header>
  );
}
