import { Link } from 'react-router-dom';
import styles from '../styles/login.module.css';
import { useContext } from 'react';
import { darkMode, loggedMode } from '../Context';
import ThemeSwitcher from './ThemeSwitcher';

export default function LogIn() {
   const theme = useContext(darkMode);
  return (
    <section className={theme.isDark ? styles.darkMode : styles.lightMode}>
      <ThemeSwitcher />
      <h1>Do you wish to log in?</h1>
      <button>
        <Link to='/'>Go back to main page</Link>
      </button>
    </section>
  );
}
