import { useNavigate } from 'react-router-dom';
import styles from '../styles/login.module.css';
import { useContext, useState } from 'react';
import { darkMode, loggedMode } from '../Context';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function LogIn() {
  const theme = useContext(darkMode);
  const login = useContext(loggedMode);
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');
  const [remember, setRemember] = useState(localStorage.getItem('email') ? true: false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const history = useNavigate();


  const handleEmailInput = (e) => {
    e.preventDefault();
    setEmailError(false);
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    e.preventDefault();
    setPasswordError(false);
    setPassword(e.target.value);
  };

  const handleRememberInput = () => {
    setRemember(!remember);
  };

  const validateEmail = (value) => {
    const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegexp.test(value);
  };

  const validatePassword = (value) => {
    return value === 'password';
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const isEmailValidate = validateEmail(email);

    const isPasswordValidate = validatePassword(password);
    if (!isEmailValidate || !isPasswordValidate) {
      if (!isEmailValidate) {
        setEmailError(true);
      }
      if (!isPasswordValidate) {
        setPasswordError(true);
      }
      return;
    }

    if (isEmailValidate && isPasswordValidate) {
      login.setIsLogged(email);
      sessionStorage.setItem('user', email);
      if (remember) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.clear();
      }
    }
    history('/');
  };

  return (
    <div className={theme.isDark ? styles.darkMode : styles.lightMode}>
      <Navigation />
      <section>
        <form
          action=''
          onSubmit={handleLogin}
          role='form'
          className={theme.lightMode ? styles.lightMode : ''}
        >
          <h1>Sign in</h1>
          <label htmlFor='email'>Your email: </label>
          <input
            type='text'
            id='email'
            required
            value={email}
            onChange={handleEmailInput}
          />
          {emailError && <p>This is not correct email format.</p>}
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            id='password'
            required
            value={password}
            onChange={handlePasswordInput}
          />
          {passwordError && <p>Your temporary password is: "password"</p>}
          <div className={styles.rememberBox}>
            <label htmlFor='remember'>Remember me</label>
            <input
              type='checkbox'
              id='remember'
              checked={remember}
              onChange={handleRememberInput}
            />
          </div>
          <button type='submit'>
            Sign in <FontAwesomeIcon icon={faRightToBracket} />
          </button>
        </form>
      </section>
    </div>
  );
}
