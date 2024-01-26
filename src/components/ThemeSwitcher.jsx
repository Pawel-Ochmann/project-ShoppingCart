import { darkMode } from '../Context';
import { useContext } from 'react';
import styles from '../styles/themeSwitcher.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function ThemeSwitcher() {
  const theme = useContext(darkMode);

  return (
    <form action='' className={styles.themeSwitcher}>
      <FontAwesomeIcon icon={faSun} className={styles.sun}/>
      <label className={styles.switch}>
        <input
          className={styles.switch}
          type='checkbox'
          checked={theme.isDark}
          onChange={() => {
            theme.setIsDark(!theme.isDark);
          }}
        />
        <span className={styles.slider}></span>
      </label>
      <FontAwesomeIcon icon={faMoon} />
    </form>
  );
}

export default ThemeSwitcher;
