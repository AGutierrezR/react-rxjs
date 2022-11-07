import React, { useState, useEffect } from 'react'
import { itemsStore } from '../store/products'

const Products = () => {
  const [state, setState] = useState(itemsStore.initialState)

  useEffect(() => {
    const subscrition = itemsStore.subscribe(setState)
    return () => {
      subscrition.unsubscribe()
    }
  }, [])

  return (
    <div>
      <h1>List of Products</h1>
      <ul>
        {state.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Products
