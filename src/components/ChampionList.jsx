import { useContext, useEffect, useState, useRef } from 'react';
import { darkMode } from '../Context';
import Navigation from './Navigation';
import ChampionCart from './ChampionCart';
import ChampionDetails from './ChampionDetails';
import styles from '../styles/championList.module.css';
import '../styles/transitions.css';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ChampionList() {
  const theme = useContext(darkMode);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [runTransition, setRunTransition] = useState(true);
  const [showDetailsPage, setShowDetailsPage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
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
  }, []);

  return (
    <div className={theme.isDark? styles.darkMode : styles.lightMode}>
      <Navigation linkTo='/' />
      <h1>Champions</h1>
      {showDetailsPage ? (
        <div className={styles.pagination}></div>
      ) : (
        <div className={styles.pagination}>
          <button
            disabled={currentPage === 1}
            onClick={() => {
              setRunTransition(false);
              setTimeout(() => {
                setCurrentPage((prevPage) => prevPage - 1);
              }, 500);
              setTimeout(() => setRunTransition(true), 500);
            }}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={theme.isDark ? styles.darkMode : styles.lightMode}
            />
          </button>
          <span>{`Page ${currentPage}`}</span>
          <button
            disabled={endIndex >= Object.keys(championList).length}
            onClick={() => {
              setRunTransition(false);
              setTimeout(() => {
                setCurrentPage((prevPage) => prevPage + 1);
              }, 500);
              setTimeout(() => setRunTransition(true), 500);
            }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className={theme.isDark ? styles.darkMode : styles.lightMode}
            />
          </button>
        </div>
      )}

      <div className={styles.classListContainer}>
        <CSSTransition in={runTransition} timeout={2000} classNames='fade'>
          {showDetailsPage ? (
            <ChampionDetails
              key={showDetailsPage}
              champion={showDetailsPage}
              detailsHandler={setShowDetailsPage}
              runTransition={setRunTransition}
              imageUrl={imageUrl}
            />
          ) : (
            <div className={`${styles.grid}`}>
              {Object.keys(championList)
                .slice(startIndex, endIndex)
                .map((championKey) => (
                  <ChampionCart
                    key={championKey}
                    champion={championList[championKey]}
                    detailsHandler={setShowDetailsPage}
                    runTransition={setRunTransition}
                    setImageUrl={setImageUrl}
                  />
                ))}
            </div>
          )}
        </CSSTransition>
      </div>
      {!showDetailsPage && (
        <div className={styles.pagination}>
          <button
            disabled={currentPage === 1}
            onClick={() => {
              setRunTransition(false);
              setTimeout(() => {
                setCurrentPage((prevPage) => prevPage - 1);
              }, 500);
              setTimeout(() => setRunTransition(true), 500);
            }}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={theme.isDark ? styles.darkMode : styles.lightMode}
            />
          </button>
          <span>{`Page ${currentPage}`}</span>
          <button
            disabled={endIndex >= Object.keys(championList).length}
            onClick={() => {
              setRunTransition(false);
              setTimeout(() => {
                setCurrentPage((prevPage) => prevPage + 1);
              }, 500);
              setTimeout(() => setRunTransition(true), 500);
            }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className={theme.isDark ? styles.darkMode : styles.lightMode}
            />
          </button>
        </div>
      )}
    </div>
  );
}
