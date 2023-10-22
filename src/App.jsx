/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles/app.module.css';

function App() {
  return (
    <>
      <main>
        <h1>Welcome</h1>
        <button>
          <Link to='/itemcart'>Item cart</Link>
        </button>
        <button>
          <Link to='usercart'>Shop cart</Link>
        </button>
        <button>
          <Link to='login'>Log in</Link>
        </button>
      </main>
    </>
  );
}

export default App;

// App.propTypes = {
//   string: PropTypes.string.isRequired,
// };

// App.defaultProps = {
//   string: 'Default value',
// };
