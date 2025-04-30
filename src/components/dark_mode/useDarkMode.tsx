import { useEffect, useState } from "react"



export function useDarkMode(){
    const [modeIsDark, setModeIsDark] = useState(false)


    const hendelMode = () => {
        setModeIsDark(!modeIsDark)
        localStorage.setItem("dark", JSON.stringify(!modeIsDark))
    }
    useEffect(() => {
        const item = localStorage.getItem("dark");
        if (item && JSON.parse(item) === true) {
            setModeIsDark(true);
        }
    }, [])
    return {
        hendelMode, modeIsDark
    }
}