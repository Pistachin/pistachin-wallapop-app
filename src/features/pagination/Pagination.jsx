import React from 'react'
import { useDispatch } from 'react-redux'
import {
  loadMore,
} from './../itemsSlice'

const Pagination = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <p onClick={() => dispatch(loadMore())}>Load more</p>
    </div>
  )
}

export default Pagination
