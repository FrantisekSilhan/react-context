import { PropsWithChildren, useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export const ThemedContainer: React.FC<PropsWithChildren> = ({children}) => {
    const data = useContext(ThemeContext);
    return(
        <div style={
            {
                padding: "1em",
                backgroundColor: data.theme === "light" ? "#fff" : "#000",
                borderRadius: "1em",
                display: "flex",
                gap: "1em",
                flexDirection: "column"
            }
        }>
            {children}
        </div>
    )
};

export default ThemedContainer;