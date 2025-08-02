import { NavLink } from 'react-router-dom';

interface NavLinkItemProps {
  to: string;
  children: React.ReactNode;
}

export default function NavLinkItem({ to, children }: NavLinkItemProps) {
  const defaultClass = 'p-2 bg-gray-100 hover:text-blue-700';
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
