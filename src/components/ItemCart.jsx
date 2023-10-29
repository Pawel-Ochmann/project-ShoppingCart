import { Link } from 'react-router-dom';
import styles from '../styles/itemCart.module.css';
import { useContext } from 'react';
import { darkMode, loggedMode } from '../Context';
import ThemeSwitcher from './ThemeSwitcher';

export default function ItemCart() {
  const theme = useContext(darkMode);

  return (
    <section className={theme.isDark ? styles.darkMode : styles.lightMode}>
      <ThemeSwitcher />
      <h1>Welcome to item cart section</h1>
      <p>this is my context</p>
      <button>
        <Link to='/'>Go back to main page</Link>
      </button>
    </section>
  );
}
