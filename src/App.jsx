/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './styles/app.module.css';
import { useContext, useEffect, useState } from 'react';
import { darkMode, loggedMode } from './Context';
import ThemeSwitcher from './components/ThemeSwitcher';
import ChampionList from './components/ChampionList';
import UserCart from './components/UserCart';

function App() {
  const theme = useContext(darkMode);
  const login = useContext(loggedMode);
  const [championList, setChampionList] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://ddragon.leagueoflegends.com/cdn/14.1.1/data/en_US/champion.json'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const list = await response.json();
        setChampionList(list.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <main className={theme.isDark ? styles.darkMode : styles.lightMode}>
      <ThemeSwitcher />
      <UserCart />
      {login.isLogged ? (
        <p>Welcome {login.isLogged}</p>
      ) : (
        <Link to='login'>
          <button data-testid='login'>'Log in'</button>
        </Link>
      )}
      <ChampionList championList={championList} />
    </main>
  );
}

export default App;
