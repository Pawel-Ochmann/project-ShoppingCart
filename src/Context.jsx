import { createContext, useState } from 'react';

export const darkMode = createContext();
export const loggedMode = createContext();
export const shopItems = createContext();

// eslint-disable-next-line react/prop-types
function Context({ children }) {
  const [isDark, setIsDark] = useState(false);

  const storedUser = sessionStorage.getItem('user');
  const defaultIsLogged = storedUser ? storedUser : false;

  const [isLogged, setIsLogged] = useState(defaultIsLogged);
  const [items, setItems] = useState([]);

  return (
    <darkMode.Provider value={{ isDark, setIsDark }}>
      <loggedMode.Provider value={{ isLogged, setIsLogged }}>
        <shopItems.Provider value={{ items, setItems }}>
            {children}
        </shopItems.Provider>
      </loggedMode.Provider>
    </darkMode.Provider>
  );
}

export default Context;
