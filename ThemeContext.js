import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

const ThemeUpdateContext = React.createContext();

// custom hook for easy access
export function useTheme() {
    return useContext(ThemeContext)
}

// custom hook for easy access
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {

    // create state
    const [darkTheme, setDarkTheme] = useState(true);

    // update state
    function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    // persisting values to all children elements of app
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}