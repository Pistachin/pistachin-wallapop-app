import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addItems,
} from './features/itemsSlice'
import ItemsList from './features/itemsList/ItemsList'
import SearchBar from './features/searchBar/SearchBar'
import Favourites from './features/favourites/Favourites'
import { getItems } from './services/getItems'
import { normalizeItems } from './services/normalizeItems'

function App() {
  const dispatch = useDispatch()
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
      <SearchBar isComplete={true} />
      <Favourites />
      <ItemsList isComplete={true} />
    </div>
  )
}

export default App
