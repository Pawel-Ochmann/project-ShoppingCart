import { useContext, useEffect } from 'react';
import { darkMode } from '../Context';
import styles from '../styles/championCart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ChampionCart({
  champion,
  detailsHandler,
  runTransition,
  setImageUrl,
}) {
  const theme = useContext(darkMode);

  return (
    <div
      className={styles.container}
      onClick={() => {
        fetch(
          `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch image');
            }
            return response.blob();
          })
          .then((imageBlob) => {
            const imageUrl = URL.createObjectURL(imageBlob);

            setImageUrl(imageUrl);
            runTransition(false);
            setTimeout(() => {
              detailsHandler({ champion });
            }, 500);
            setTimeout(() => runTransition(true), 500);
          });
      }}
    >
      <picture>
        <source
          srcSet={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champion.id}.png`}
          media='(max-width: 700px)'
        />
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
          alt=''
          width={200}
        />
      </picture>
      <div className={styles.nameBox}>
        <h3>{champion.id}</h3>
        <p>{champion.title}</p>
      </div>
      <button>
        {' '}
        <FontAwesomeIcon
          icon={faArrowRight}
          className={theme.isDark ? styles.darkMode : styles.lightMode}
        />
      </button>
    </div>
  );
}
