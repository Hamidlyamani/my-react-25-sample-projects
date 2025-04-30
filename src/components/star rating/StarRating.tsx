import { useState } from "react"
import { FaStar } from "react-icons/fa";
import  './style.css'
const initialState = ['blue', 'blue', 'blue', 'blue', 'blue']

export  function StarRating2() {
    const [Arraystar, setArraystar] = useState(initialState)
    const updateColorOnHover = (e: number) => {
        let nowArray = Arraystar.map((_, i) => i <= e ? 'red' : 'blue');
        setArraystar(nowArray)
    }
    const updateColorOnClick = (e: number) => {
        let nowArray = Arraystar.map((item,i) => {
            if (i <= e) {
                return item = 'red'
            }
            else { return item = 'blue'; }
        })
        setArraystar(nowArray)
    }
    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }} >

            {Arraystar.map((item, i) => {
                return (<span key={i} style={{ fontSize: '100px',cursor:'pointer', color: item }} onClick={() => updateColorOnClick(i)} onMouseEnter={() => { updateColorOnHover(i) }} >&#9733;</span>)
            })}
        </div>
    )
}



export default function StarRating() {
    const [hover, setHover]=useState(0)
    const [rating, setRating]=useState(0)



    let noOfStars = 6;
    const handleClick = (i:number) => {
        setRating(i);
    }
    const handleMouseEnter = (i:number) => {
        setHover(i);
    }
    const handleMouseLeave = () => {
        setHover(0)
    }


    return (
        <div className="star-rating">
            {[...Array(noOfStars)].map((_, index) => {
                index += 1;

                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                );
            })}
        </div>
    )
}