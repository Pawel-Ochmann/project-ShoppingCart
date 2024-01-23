import styles from '../styles/userCart.module.css';
import { useContext, useState, useRef, useEffect } from 'react';
import { darkMode, shopItems } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function UserCart() {
  const [isClosed, setIsClosed] = useState(true);
  const { items, setItems } = useContext(shopItems);
  const theme = useContext(darkMode);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      console.log(event.target)
      const isXButton =
        event.target.tagName.toLowerCase() === 'button' &&
        event.target.innerText === 'x';
      if (!isClosed && !cartRef.current.contains(event.target) && !isXButton) {
        setIsClosed(true);
      }
    };

    if (isClosed) {
      setTimeout(() => {
        document.body.removeEventListener('click', handleOutsideClick);
      }, 10);
    } else {
      setTimeout(() => {
        document.body.addEventListener('click', handleOutsideClick);
      }, 10);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isClosed]);

  const handleCartIconClick = () => {
    setIsClosed((prevIsClosed) => !prevIsClosed);
  };

  const removeItem = (champion) => {
    const index = items.findIndex((item) => item === champion);
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faCartShopping}
        className={styles.cartIcon}
        onClick={handleCartIconClick}
      />
      <p>({items.length})</p>
      <div className={`${styles.backdrop} ${!isClosed && styles.backdropVisible}`}></div>
      <div
        ref={cartRef}
        className={`${styles.cart} ${isClosed ? styles.cartHidden : styles.cartVisible}`}
      >
        <h2>{items.length} {items.length === 1 ? 'Champion' : 'Champions'}</h2>
        <button
          onClick={() => {
            setItems([]);
          }}
        >
          Clear items
        </button>
        <div className={styles.itemList}>
          {items.map((champion) => (
            <div className={styles.championBox} key={champion.champion.key}>
              <h3>{champion.champion.name}</h3>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${champion.champion.name}.png`}
                alt=''
              />
              <button
                onClick={() => {
                  removeItem(champion);
                }}
              >
                x
              </button>
              <p>Price: 50$</p>
            </div>
          ))}
        </div>
        <p>{`Total: ${items.length * 50}$`}</p>
        <button>Buy</button>
      </div>
    </>
  );
}
