import { Link } from 'react-router-dom';

export default function UserCart() {
  return (
    <section>
      <h1>Welcome to user cart</h1>
      <button>
        <Link to='/'>Go back to main page</Link>
      </button>
    </section>
  );
}
