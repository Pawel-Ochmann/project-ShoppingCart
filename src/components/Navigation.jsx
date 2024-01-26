import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { darkMode, loggedMode } from '../Context';
import ThemeSwitcher from './ThemeSwitcher';
import UserCart from './UserCart';
import styles from '../styles/navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navigation({ linkTo }) {
  const theme = useContext(darkMode);
  const login = useContext(loggedMode);
  const [navHidden, setNavHidden] = useState(true);

  return (
    // <div className={theme.isDark ? styles.darkMode : styles.lightMode}>
    <div className={styles.nav}>
      <Link className={styles.iconMain} to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/240px-League_of_Legends_2019_vector.svg.png'
          alt=''
        />
      </Link>
      <UserCart />
      <button
        onClick={() => {
          setNavHidden(false);
        }}
        className={`${styles.navListButton}  ${navHidden ? '' : styles.hidden}`}
      >
        <FontAwesomeIcon
          icon={faBars}
          className={darkMode ? styles.darkMode : styles.lightMode}
        />
      </button>
      <div className={`${styles.navList} ${navHidden && styles.hidden}`}></div>
      <div
        className={`${styles.navListContainer} ${
          navHidden ? styles.hidden : styles.visible
        }`}
      >
        {' '}
        <button
          className={styles.xButton}
          onClick={() => {
            setNavHidden(true);
          }}
        >
          X
        </button>
        <Link to={linkTo}>
          <button>{linkTo === 'champions' ? 'Store' : 'Main Page'}</button>
        </Link>
        <ThemeSwitcher />
        <div className={styles.loginContainer}>
          {login.isLogged ? (
            <>
              {' '}
              <p>
                You are logged as <br /> <span>{login.isLogged}</span>
              </p>
              <button>Log out</button>
            </>
          ) : (
            <Link to='login'>
              <button data-testid='login'> Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
