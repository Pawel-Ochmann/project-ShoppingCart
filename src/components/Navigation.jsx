import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { darkMode, loggedMode } from '../Context';
import ThemeSwitcher from './ThemeSwitcher';
import UserCart from './UserCart';

export default function Navigation() {
  const theme = useContext(darkMode);
  const login = useContext(loggedMode);

  return (
    // <div className={theme.isDark ? styles.darkMode : styles.lightMode}>
    <div>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/240px-League_of_Legends_2019_vector.svg.png'
        alt=''
      />
      <UserCart />

      <div>
          <Link to='champions'><button>Store</button></Link>
          <ThemeSwitcher />
          {login.isLogged ? (
            <p>{login.isLogged}</p>
          ) : (
            <Link to='login'>
              <button data-testid='login'> Log in</button>
            </Link>
          )}
      </div>
    </div>
  );
}

