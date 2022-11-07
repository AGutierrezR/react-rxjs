import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { itemsStore } from '../store/products'

const AddProduct = () => {
  const [item, setItem] = useState('')
  const history = useHistory()

  const onFormSubmit = (e) => {
    e.preventDefault()

    itemsStore.addItem(item)
    history.push('/')
  }

  return (
    <div>
      <h1>Add Products</h1>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="">Product Name</label>
        <input
          type="text"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddProduct
