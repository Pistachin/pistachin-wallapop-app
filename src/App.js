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
    <div>
      <SearchBar searchOptions={attributes} isComplete={true} />
      <Sorter sortOptions={attributes} />
      <PriceRange />
      <Favourites />
      <ItemsList isComplete={true} />
      <Pagination />
    </div>
  )
}

export default App
