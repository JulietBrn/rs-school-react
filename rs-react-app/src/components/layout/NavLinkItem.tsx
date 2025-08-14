import Link from 'next/link';

interface NavLinkItemProps {
  to: string;
  children: React.ReactNode;
}

export default function NavLinkItem({ to, children }: NavLinkItemProps) {
  const defaultClass =
    'p-2 bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:text-blue-200 dark:hover:text-blue-300 transition-colors duration-300';
  const activeClass = 'font-bold';

  return (
    <Link className={defaultClass} href={to}>
      {children}
    </Link>
  );
}
