import { useState } from 'react'
import './style.css'

type XorO = {
    i: number;
    value:string;
}


export default function X_O_game() {
    const [isXtorn, setIsXtorn] = useState(false);
    const [isclicked, setIsClicked] = useState<XorO[]>([]);
    const [X, setX] = useState<number[]>([])
    const [Y, setY] = useState<number[]>([])

    const handleClick = (e: number) => {
        
        if (isXtorn) {
            setX(
                prev => [...prev, e]
            )
            setIsClicked(
                prev => [...prev,{i:e,value:"X"}]
            )
        } else {
            setY(
                prev => [...prev, e]
            )
            setIsClicked(
                prev => [...prev, { i: e, value: "O" }]
            )
        }


        setIsXtorn(!isXtorn);
    }

    const checkIsAWinner = (array:Number[]) => {
    
}




  return (
      <div className='game_container'>
          <div className="game">
              {Array.from({ length: 9 }).map((_, i) => {
                  const foundItem = isclicked.find((item) => item.i === i);
                  return (<div className="button" onClick={() => { handleClick(i) }} key={i}>
                      {foundItem ? foundItem.value : null}
                  </div>)
              })
             }
          </div>
          <h4 >{isclicked.length < 9 ? <>Next player is ${isXtorn ? "X" : "O"} </> : <><p>  This is a drow, please restart the game </p> <button>restart</button></>}</h4>
    </div>
  )
}
