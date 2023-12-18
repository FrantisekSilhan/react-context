import { createContext, useState } from "react"

type ThemeType = "light" | "dark";
type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({theme: "light", toggleTheme: () => {}});

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>("light");
    const toggleTheme = () => {
        setTheme(x => x === "light" ? "dark" : "light");
    };

    return (
        <>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeProvider