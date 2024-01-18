/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles/app.module.css';
import { useContext } from 'react';
import { darkMode, loggedMode } from './Context';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const theme = useContext(darkMode);
  const login = useContext(loggedMode);

  return (
    <main className={theme.isDark ? styles.darkMode : styles.lightMode}>
      <ThemeSwitcher />
      {login.isLogged ? (
        <p>Welcome {login.isLogged}</p>
      ) : (
        <Link to='login'>
          <button data-testid='login'>'Log in'</button>
        </Link>
      )}
      <button>
        <Link to='/itemcart'>Item cart</Link>
      </button>
      <button>
        <Link to='usercart'>Shop cart</Link>
      </button>
    </main>
  );
}

export default App;

// App.propTypes = {
//   string: PropTypes.string.isRequired,
// };

// App.defaultProps = {
//   string: 'Default value',
// };
