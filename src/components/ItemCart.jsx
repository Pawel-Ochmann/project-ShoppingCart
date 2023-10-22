import { Link } from 'react-router-dom';

export default function ItemCart() {
    return (
        <section>
            <h1>Welcome to item cart section</h1>
            <button><Link to='/'>Go back to main page</Link></button>
        </section>
    )
}