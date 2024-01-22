import { useContext, useEffect, useState, useRef } from 'react';
import { darkMode } from '../Context';
import ChampionCart from './ChampionCart';
import ChampionDetails from './ChampionDetails';
import styles from '../styles/championList.module.css';
import '../styles/transitions.css';
import { CSSTransition } from 'react-transition-group';

export default function ChampionList({ championList }) {
  const theme = useContext(darkMode);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [runTransition, setRunTransition] = useState(true);
  const [showDetailsPage, setShowDetailsPage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);


  return (
    <>
      <h1>Champion List</h1>
      {!showDetailsPage && (
        <div className='pagination'>
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
            Previous
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
            Next
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
        <div className='pagination'>
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
            Previous
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
            Next
          </button>
        </div>
      )}
    </>
  );
}
