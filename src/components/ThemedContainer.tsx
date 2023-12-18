import { PropsWithChildren, useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export const ThemedContainer: React.FC<PropsWithChildren> = ({children}) => {
    const data = useContext(ThemeContext);
    return(
        <div style={
            {
                padding: 50,
                backgroundColor: data.theme === "light" ? "#000" : "#fff",
                borderRadius: 10
            }
        }>
            {children}
        </div>
    )
};

export default ThemedContainer;