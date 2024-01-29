import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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
          className={theme.isDark ? styles.darkMode : styles.lightMode}
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
        <button
          onClick={() => {
            linkTo === 'champions' ? navigate('/champions') : navigate('/');
          }}
        >
          {linkTo === 'champions' ? 'Store' : 'Main Page'}
        </button>
        <ThemeSwitcher />
        <div className={styles.loginContainer}>
          {login.isLogged ? (
            <>
              {' '}
              <p>
                <span>{login.isLogged}</span>
              </p>
              <button className={styles.logOutButton}
                onClick={() => {
                  login.setIsLogged('');
                  setNavHidden(true);
                  navigate('/');
                }}
              >
                Log out
              </button>
            </>
          ) : (
            <button
              data-testid='login'
              onClick={() => {
                navigate('/login');
              }}
            >
              {' '}
              Log in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
