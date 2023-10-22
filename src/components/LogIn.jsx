import { Link } from 'react-router-dom';

export default function LogIn() {
  return (
    <section>
      <h1>Do you wish to log in?</h1>
      <button>
        <Link to='/'>Go back to main page</Link>
      </button>
    </section>
  );
}
