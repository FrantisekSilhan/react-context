import { useContext } from "react"
import { ThemeContext } from "../providers/ThemeProvider"

export const ThemedComponent = () => {
    const data = useContext(ThemeContext);
    console.log(data);

    return (
        <>
            <div style={{backgroundColor: data.theme === "light" ? "#fff" : "#000"}}>

            </div>
        </>
    )
}

export default ThemedComponent