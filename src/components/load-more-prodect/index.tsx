import { useEffect, useState } from 'react'
import './style.css';

type product_type = {
    id: number,
    title: string,
    price: number,
    category: string,
    electronics: string,
    images: string[],
    rating: {
        rate: number,
        count:number
    }
}

export default function Prodects() {
    const [prudects, setProducts] = useState < product_type[]>([])
    const [error, setError] = useState(false)
    const [loading, setlaoding] = useState(false)
    const limit = 100;
    const url = "https://dummyjson.com/products/?limit=10";
    const [start, setStart] = useState(0)
   
    const GetProducts = async (url: string, start: number,) => {
        try {
            setlaoding(false)
            const response = await fetch(url + '&skip=' + start )
            const resultat = await response.json()
            setProducts(prev => [...prev, ...resultat.products])
            setlaoding(true)
            
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(true)
        }
    }
   
     
    useEffect(() => {
        GetProducts(url, start)
    }, [start]) 

    if (error) {
        return <div>
            this is error
        </div>
    }

    return (
        <div>
            {!loading ? <div className="loading">please wait a second... </div> :
                <div className="products">
                    {prudects.map((item) => {
                        return (
                            <div className="product">
                                <img src={item.images[0]} alt="" />
                                <div className="title">{item.title}</div>
                            </div>
                        )
                    })}
                </div>
            }
            <div className={`button ${start == limit ? "desabled" : ""}`} onClick={() => { setStart(start + 10) }}>
                load more products
            </div>
          
            {start == limit ? <div className="found">you are reached limit</div> : ''}
        </div>
    )
}
