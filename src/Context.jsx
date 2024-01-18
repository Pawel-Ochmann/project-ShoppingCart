import { createContext, useState } from "react";

export const darkMode = createContext();
export const loggedMode = createContext();


// eslint-disable-next-line react/prop-types
function Context({children}) {
    const [isDark, setIsDark] = useState(false);

    const storedUser = sessionStorage.getItem('user');
    const defaultIsLogged = storedUser ? storedUser : false;

    const [isLogged, setIsLogged] = useState(defaultIsLogged);

    return (
        <darkMode.Provider value={{isDark, setIsDark}}>
            <loggedMode.Provider value={{isLogged, setIsLogged}}>
                {children}
            </loggedMode.Provider>
        </darkMode.Provider>
    )
}

export default Context;