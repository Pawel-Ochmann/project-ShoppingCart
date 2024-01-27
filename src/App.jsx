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
      <div className={styles.container}>
        <img src='https://images2.alphacoders.com/132/1328381.png' alt='' />
        <h1>
          Champion Emporium: Your One-Stop Shop for League of Legends Heroes!
        </h1>
        <p>
          Welcome to the Champion Emporium, where every summoner's dream comes
          true! Dive into the realm of League of Legends and explore a vast
          array of champions waiting to be recruited to your cause. Whether
          you're a seasoned veteran or a novice explorer, our store offers a
          comprehensive selection of champions for every playstyle and strategy.
          Embark on epic battles, forge alliances, and conquer the Rift with the
          champions of your choice. Start your journey today and become a legend
          in the League!
        </p>
        <Link to='/champions'><button>Go to Store!</button></Link>
      </div>
    </main>
  );
}

export default App;
