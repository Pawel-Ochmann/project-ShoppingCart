import { useContext, useEffect, useState } from 'react';
import { darkMode, shopItems } from '../Context';
import styles from '../styles/championDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function ChampionDetails({
  champion,
  imageUrl,
}) {
  const { items, setItems } = useContext(shopItems);
  const [isAdded, setIsAdded] = useState(false);
  const theme = useContext(darkMode);

  useEffect(() => {
    const checkItems = items.find((item) => item === champion);
    setIsAdded(checkItems);
  }, [items, champion]);

  const handlePurchase = () => {
    if (isAdded) {
      const index = items.findIndex((item) => item === champion);
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    } else {
      setItems((prevItems) => [...prevItems, champion]);
    }
    setIsAdded(!isAdded);
  };

  return (
    <div className={`${styles.detailsBox}`}>
      <img src={imageUrl} alt='' />
      <h1>{champion.champion.name}</h1>
      <p className={styles.championTitle}>{champion.champion.title}</p>
      <p className={styles.championDescription}>{champion.champion.blurb}</p>
      <h2>Price: <span>50$</span></h2>
      <button onClick={handlePurchase}>
        {isAdded ? 'Remove from Cart' : 'Add to cart'}
        {isAdded ? (
          <FontAwesomeIcon icon={faTrash} />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )}
      </button>
    </div>
  );
}
