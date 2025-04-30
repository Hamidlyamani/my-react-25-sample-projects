
import './style.css'
import data from './data'
import { useState } from 'react'


export default function Accordian() {
    const [Multi, setMulti] = useState<boolean>(false)
    const [activeItems , setactiveItems ] = useState<string[]>([])

    const openAnswermulti = (id: string) => {
        if (Multi) {
            (!activeItems.includes(id)) ?
                setactiveItems([...activeItems, id])
                :
                setactiveItems(prev =>
                    [...prev.filter(item => item !== id)]
                )
        } else {
            (!activeItems.includes(id)) ?
                setactiveItems([id])
                :
                setactiveItems(prev =>
                    [...prev.filter(item => item !== id)]
                )
        }
    }


    return (
        <div className="acc-wrapper">
            <button onClick={() => setMulti(!Multi)}>
                Enable Multi Selection
            </button>
            <div className="accordian">
                {
                    data.length > 0 ?
                        data.map(item => {
                            return (
                                <div className="item" key={item.id} >
                                    <div className="title" onClick={() => openAnswermulti(item.id)}>
                                        <h3>{item.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {(activeItems.includes(item.id)) ? <div className="acc-content" >{item.answer} </div>:''}
                                </div>
                            )
                        })

                        :
                        <div>No data found !</div>
                }
            </div>
        </div>
    )
}
