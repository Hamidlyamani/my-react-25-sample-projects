import React, { useState } from 'react'

export default function Scroll_indicator() {
    const [products, setProducts] = useState([])
    
    const getproducts= (async () => {
        try {
            let response = await fetch('https://fakestoreapi.com/products');
            const prodects = await response.json()
            setProducts(prodects)
        } catch(e) {
          console.log(e)  
        }
    })
   
  return (
      <div>
          
    </div>
  )
}
