/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles/app.module.css';
import { createContext, useState } from 'react';

export const isDarkMode = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <isDarkMode.Provider value={isDark}>
      <main className={isDark ? styles.darkMode : styles.lightMode}>
        <h1>Welcome</h1>
        <form action=""><input type="range" value={isDark ? "1" : "0"} min="0" max="1" onChange={()=>{setIsDark(!isDark)}}/></form>
        <button>
          <Link to='/itemcart'>Item cart</Link>
        </button>
        <button>
          <Link to='usercart'>Shop cart</Link>
        </button>
        <button>
          <Link to='login'>Log in</Link>
        </button>
      </main>
    </isDarkMode.Provider>
  );
}

export default App;

// App.propTypes = {
//   string: PropTypes.string.isRequired,
// };

// App.defaultProps = {
//   string: 'Default value',
// };
