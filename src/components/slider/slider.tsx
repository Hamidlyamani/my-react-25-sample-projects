import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import './style.css'
import { useState } from "react";


export default function Slider() {
    const numberOfSlides = 8
    const [slide, setSlide] = useState(0)
    const GoArrowLeft = () => {
        setSlide(slide !== 0 ? slide - 1 : numberOfSlides - 1);
    
    }
    const GoArrowright = () => {
        setSlide(slide !== numberOfSlides - 1 ? slide + 1 : 0);
    }


    return (
        <div className="containert">
            <div className="left" onClick={GoArrowLeft}><BsArrowLeftCircle /></div>
            <div className="right" onClick={GoArrowright}><BsArrowRightCircle /></div>
            {
                [...Array(numberOfSlides)].map((_, i) => {
                    return (
                        <div key={i} className={`slide ${slide === i ? 'active' : ''}`} >
                          
                            <img src={`https://picsum.photos/id/1${i}4/200`} alt="" />
                        </div>
                    )
                })
            }


            <div className="buttons">
              {  [...Array(numberOfSlides)].map((_, i) => {
                    return (
                        <div key={i} onClick={() => { setSlide(i) }}  className={`dot ${slide === i ? 'active' : ''}`}></div>
                )
                })
            }
            </div>
        </div >
    )
}
