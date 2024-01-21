import styles from '../styles/userCart.module.css';
import { useContext, useState, useRef, useEffect } from 'react';
import { darkMode } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function UserCart() {
  const [isClosed, setIsClosed] = useState(true);
  const theme = useContext(darkMode);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!isClosed && !(cartRef.current == event.target)) {
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

  return (
    <>
      <FontAwesomeIcon
        icon={faCartShopping}
        className={styles.cartIcon}
        onClick={handleCartIconClick}
      />
      <div
        ref={cartRef}
        className={`${styles.cart} ${isClosed ? styles.cartHidden : ''}`}
      >
        <p>this is usersCart</p>
      </div>
    </>
  );
}
