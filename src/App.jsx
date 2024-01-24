/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './styles/app.module.css';
import { useContext } from 'react';
import { darkMode } from './Context';
import Navigation from './components/Navigation';

function App() {
  const theme = useContext(darkMode);

  return (
    <main className={theme.isDark ? styles.darkMode : styles.lightMode}>
      <Navigation linkTo='champions' />
    </main>
  );
}

export default App;
