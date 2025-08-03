import { NavLink } from 'react-router-dom';

interface NavLinkItemProps {
  to: string;
  children: React.ReactNode;
}

export default function NavLinkItem({ to, children }: NavLinkItemProps) {
  const defaultClass =
    'p-2 bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:text-blue-200 dark:hover:text-blue-300 transition-colors duration-300';
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${defaultClass} font-bold` : defaultClass
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
