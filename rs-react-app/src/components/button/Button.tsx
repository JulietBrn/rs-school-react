import { buttonClass } from './constants';

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}

export { Button };
