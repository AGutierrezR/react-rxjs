import React, { useState } from 'react'

const Products = () => {
  const [state, setstate] = useState([])

  return (
    <div>
      <ul>
        {state.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Products
