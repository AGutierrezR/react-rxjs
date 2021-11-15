import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const AddProduct = () => {
  const [item, setItem] = useState('')
  const history = useHistory()

  const onFormSubmit = (e) => {
    e.preventDefault()
    history.push('/')
  }

  return (
    <div>
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
