import React, { createContext, ReactNode, useEffect, useState } from 'react'

interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    Toggle: () => void;
}

interface Tchildren {
    children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextType)


const getTheme = (): string => {
    const theme = localStorage.getItem("Theme")
    if (!theme) {
        localStorage.setItem("Theme", "dark-theme")
        return "dark-theme"
    } else return theme
}


const ThemeProvider = ({ children }: Tchildren) => {
    const [theme, setTheme] = useState<string>(getTheme)

    const Toggle = (): void => {
        theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme")
    }
    useEffect(() => {
        const refreshTheme = () => {
            localStorage.setItem("Theme", theme)
        };

        refreshTheme();
    }, [theme])

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                Toggle
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider };