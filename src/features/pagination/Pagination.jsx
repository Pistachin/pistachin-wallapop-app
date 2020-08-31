import React from 'react'
import { useDispatch } from 'react-redux'
import { loadMore } from './../itemsSlice'

const Pagination = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center py-3'>
      <button
        className='rounded-full bg-wallapop-main hover:bg-wallapop-hover-dark text-white px-6 py-2'
        onClick={() => dispatch(loadMore())}
      >
        Load more
      </button>
    </div>
  )
}

export default Pagination
