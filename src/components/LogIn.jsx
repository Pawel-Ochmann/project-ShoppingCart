import { Link } from 'react-router-dom';
import styles from '../styles/login.module.css';
import { useContext } from 'react';
import { isDarkMode } from '../App';

export default function LogIn() {
   const isDark = useContext(isDarkMode);
  return (
    <section className={isDark ? styles.darkMode : styles.lightMode}>
      <h1>Do you wish to log in?</h1>
      <button>
        <Link to='/'>Go back to main page</Link>
      </button>
    </section>
  );
}
