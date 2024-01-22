import { useContext, useEffect, useState } from 'react';
import { darkMode, shopItems } from '../Context';
import styles from '../styles/championDetails.module.css';

export default function ChampionDetails({
  champion,
  imageUrl,
  detailsHandler,
  runTransition,
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
      <h3>{champion.champion.name}</h3>
      <p>{champion.champion.title}</p>
      <p>{champion.champion.blurb}</p>
      <img src={imageUrl} alt='' />
      <button onClick={handlePurchase}>
        {isAdded ? 'Remove' : 'Purchase'}
      </button>
    </div>
  );
}
