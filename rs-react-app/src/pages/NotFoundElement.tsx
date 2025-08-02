import { Link } from 'react-router-dom';

export function NotFoundElement() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link className="text-blue-500 underline hover:text-blue-700" to="/">
        Go back to Home
      </Link>
    </div>
  );
}
