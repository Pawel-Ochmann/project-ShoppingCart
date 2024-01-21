import { useContext, useEffect } from 'react';
import { darkMode } from '../Context';
import styles from '../styles/championDetails.module.css';

export default function ChampionDetails({
  champion,
  imageUrl,
  detailsHandler,
  runTransition,
}) {
  const theme = useContext(darkMode);
  useEffect(()=> {
    console.log(champion, imageUrl);
  })
  return (
    <div className={`${styles.detailsBox}`}>
      <h3>{champion.id}</h3>
      <p>{champion.title}</p>
      <p>{champion.blurb}</p>
      <img src={imageUrl} alt='' />
      <button
        onClick={() => {
          runTransition(false);
          setTimeout(() => {
            detailsHandler(null);
          }, 500);
          setTimeout(() => runTransition(true), 500);
        }}
      >
        Close details
      </button>
    </div>
  );
}
