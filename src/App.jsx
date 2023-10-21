/* eslint-disable react/prop-types */
// import './styles/main.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles/app.module.css';

function App({ string }) {
  console.log(styles)

  return (
    <>
      <p className={styles.paragraph}>Testing testing</p>
      <button>
        <Link to='profile'>
          Profile page
        </Link>
      </button>
    </>
  );
}

App.propTypes = {
  string: PropTypes.string.isRequired,
};

App.defaultProps = {
  string: 'Default value',
};

export default App;
