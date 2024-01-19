import { useContext, useEffect, useState } from 'react';
import { darkMode } from '../Context';
import ChampionCart from './ChampionCart';
import styles from '../styles/championList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function ChampionList({ championList }) {
  const theme = useContext(darkMode);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    console.log(championList);
  });

  return (
    <TransitionGroup>
      <h1>Champion List</h1>
      <div className='pagination'>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        >
          Previous
        </button>
        <span>{`Page ${currentPage}`}</span>
        <button
          disabled={endIndex >= Object.keys(championList).length}
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      </div>

      <div className={styles.grid}>
        {Object.keys(championList)
          .slice(startIndex, endIndex) // Display only the items for the current page
          .map((championKey) => (
            <CSSTransition
              key={championKey}
              timeout={500} // Adjust the timeout based on your animation duration
              classNames='fade'
            >
              <ChampionCart
                key={championKey}
                champion={championList[championKey]}
              />
            </CSSTransition>
          ))}
      </div>
      <div className='pagination'>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        >
          Previous
        </button>
        <span>{`Page ${currentPage}`}</span>
        <button
          disabled={endIndex >= Object.keys(championList).length}
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      </div>
    </TransitionGroup>
  );
}
