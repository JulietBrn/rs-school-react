function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 bg-indigo-700 text-amber-100 sm:max-w-40 cursor-pointer hover:bg-indigo-800 transition-colors duration-300"
    >
      {children}
    </button>
  );
}

export { Button };
