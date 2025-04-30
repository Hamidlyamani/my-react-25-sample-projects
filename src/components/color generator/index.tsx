
import { useEffect, useState } from 'react'


export default function ColorGenerator() {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('')

    const handleCreateRandomHexColor = () => {
        let colorHex1 = getRendomInit(256).toString(16).padStart(2, '0');
        let colorHex2 = getRendomInit(256).toString(16).padStart(2, '0');
        let colorHex3 = getRendomInit(256).toString(16).padStart(2, '0');
        setColor("#" + colorHex1 + colorHex2 + colorHex3)
    }
    const handleCreateRandomRgbColor = () => {
        let colorRgb1 = getRendomInit(256);
        let colorRgb2 = getRendomInit(256);
        let colorRgb3 = getRendomInit(256);
        setColor(`rgb(${colorRgb1},${colorRgb2},${colorRgb3})`)
    }
    const getRendomInit = (length:number)=>{
        return Math.floor(Math.random() * length)
    }
    
    useEffect(() => {
        typeOfColor === "rgb" ? handleCreateRandomRgbColor() : handleCreateRandomHexColor();

    },[typeOfColor])
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                background: color,
            }}
        >
            <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
            <button
                onClick={
                    typeOfColor === "hex"
                        ? handleCreateRandomHexColor
                        : handleCreateRandomRgbColor
                }
            >
                Generate Random Color
            </button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "60px",
                    marginTop: "50px",
                    flexDirection: 'column',
                    gap: '20px'
                }}
            >
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}
