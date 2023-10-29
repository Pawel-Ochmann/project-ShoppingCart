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
      <button>
        <Link to='login'>{login ? 'User is logged' : 'Log in'}</Link>
      </button>
      <h1>Welcome</h1>
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
