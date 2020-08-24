import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  setMinPrice,
  setMaxPrice
} from './../itemsSlice'

const PriceRange = () => {
  const [usedMinPrice, setUsedMinPrice] = useState(0)
  const [usedMaxPrice, setUsedMaxPrice] = useState(undefined)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setMinPrice(Number(usedMinPrice)))
  }, [usedMinPrice])

  useEffect(() => {
    if (!isNaN(usedMaxPrice)) {
      dispatch(setMaxPrice(Number(usedMaxPrice)))
    }
  }, [usedMaxPrice])

  return (
    <div>
      <p>Price Range:</p>
      <div>
        <p>From:</p>
        <input
          type='number'
          min={0}
          max={usedMaxPrice}
          value={usedMinPrice}
          onChange={(e) => {
            setUsedMinPrice(e.target.value)
          }} />
      </div>
      <div>
        <p>To:</p>
        <input
          type='number'
          min={usedMinPrice}
          value={usedMaxPrice}
          onChange={(e) => {
            setUsedMaxPrice(e.target.value)
          }} />
      </div>
    </div>
  )
}

export default PriceRange