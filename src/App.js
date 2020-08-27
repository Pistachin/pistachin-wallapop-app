import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  addItems,
} from './features/itemsSlice'
import ItemsList from './features/itemsList/ItemsList'
import SearchBar from './features/searchBar/SearchBar'
import Favourites from './features/favourites/Favourites'
import Sorter from './features/sorter/Sorter'
import PriceRange from './features/priceRange/PriceRange'
import Pagination from './features/pagination/Pagination'
import { getItems } from './services/getItems'
import { normalizeItems } from './services/normalizeItems'

function App() {
  const dispatch = useDispatch()
  const attributes = ['title', 'description', 'price', 'email']
  // const attributes = ['título', 'descripción', 'precio', 'email']
  useEffect(() => {
    getItems()
      .then(res => {
        dispatch(addItems(normalizeItems([...res.items])))
      })
      .catch(error => {
        console.log({ error })
      })
  }, [])

  return (
    <div className='z-0 relative'>
      <div className='flex space-x-2 px-4 py-2'>
        <SearchBar searchOptions={attributes} isComplete={true} />
        <PriceRange />
      </div>
      <Favourites />
      <div className='px-4 py-2 bg-wallapop-gray'>
        <Sorter sortOptions={attributes} />
        <ItemsList isComplete={true} />
        <Pagination />
      </div>
    </div>
  )
}

export default App
