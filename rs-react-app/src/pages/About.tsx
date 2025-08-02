import { Link } from 'react-router-dom';

export function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Application author: <strong>Iuliia Barinova</strong>
      </p>
      <p>Author's stack: React, TypeScript, Redux, HTML, CSS, JavaScript.</p>
      <p>
        Fun fact: I once debugged my code with rubber ducks and cookies—both
        worked, but the cookies disappeared faster!
      </p>

      <p>
        Learn more about React course at{' '}
        <Link
          to="https://rs.school/courses/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          RS School React course
        </Link>
      </p>
    </div>
  );
}
