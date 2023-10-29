import { darkMode, loggedMode } from '../Context';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/themeSwitcher.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function ThemeSwitcher() {
  const theme = useContext( darkMode );

  return (
    <form action=''>
      <FontAwesomeIcon icon={faSun} />
      <input
        className={theme.isDark ? styles.darkMode : styles.lightMode}
        type='range'
        value={theme.isDark ? '1' : '0'}
        min='0'
        max='1'
        role='input'
        onChange={() => {
          theme.setIsDark(!theme.isDark);
        }}
      />
      <FontAwesomeIcon icon={faMoon} />
    </form>
  );
}

export default ThemeSwitcher;

// ThemeSwitcher.propTypes = {
//   isDark: PropTypes.boolean
// };

