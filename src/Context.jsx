import { createContext, useState } from "react";

export const darkMode = createContext();
export const loggedMode = createContext();


// eslint-disable-next-line react/prop-types
function Context({children}) {
    const [isDark, setIsDark] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    return (
        <darkMode.Provider value={{isDark, setIsDark}}>
            <loggedMode.Provider value={{isLogged, setIsLogged}}>
                {children}
            </loggedMode.Provider>
        </darkMode.Provider>
    )
}

export default Context;