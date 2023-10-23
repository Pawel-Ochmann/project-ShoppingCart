import { Link } from 'react-router-dom';
import styles from '../styles/itemCart.module.css'
import { useContext } from 'react';
import {isDarkMode} from '../App';

export default function ItemCart() {
    const isDark = useContext(isDarkMode)

    return (
        <section className={isDark ? styles.darkMode : styles.lightMode}>
            <h1>Welcome to item cart section</h1>
            <p>this is my context</p>
            <button><Link to='/'>Go back to main page</Link></button>
        </section>
    )
}