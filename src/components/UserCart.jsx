import { Link } from 'react-router-dom';
import styles from '../styles/userCart.module.css';
import { useContext } from 'react';
import { darkMode, loggedMode } from '../Context';

export default function UserCart() {
  const theme = useContext(darkMode);
  return (
    <section className={theme.isDark ? styles.darkMode : styles.lightMode}>
      <h1>Welcome to user cart</h1>
      <button>
        <Link to='/'>Go back to main page</Link>
      </button>
    </section>
  );
}
