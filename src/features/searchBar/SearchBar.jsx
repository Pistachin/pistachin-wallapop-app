import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  findItems,
  addItems,
  findFavouriteItems
} from './../itemsSlice'
import searchItems from '../../services/searchItems'

const SearchBar = ({ isComplete, searchOptions }) => {
  const [inputSearchValue, setInputSearchValue] = useState('')
  const [searchBy, setSearchBy] = useState('title')
  const searchedWord = useSelector((state) => isComplete ? state.items.searchedWord : state.items.favouritesSearchedWord)
  const itemsList = useSelector((state) => state.items.list)
  const dispatch = useDispatch()

  let searchTimeout
  const editSearchValue = (val) => {
    window.clearTimeout(searchTimeout)
    setInputSearchValue(val)
  }

  const updateSearch = () => {
    if (isComplete) {
      searchTimeout = window.setTimeout(() => dispatch(findItems(inputSearchValue)), 500)
    } else {
      searchTimeout = window.setTimeout(() => dispatch(findFavouriteItems(inputSearchValue)), 500)
    }
  }

  useEffect(() => {
    updateSearch()
  }, [inputSearchValue])

  useEffect(() => {
    const updatedItems = searchItems(itemsList, searchBy, searchedWord, isComplete)
    dispatch(addItems(updatedItems))
  }, [searchedWord, searchBy])

  return (
    <div>
      <input type='text' value={inputSearchValue} onChange={(e) => editSearchValue(e.target.value)}/>
      {
        isComplete &&
        <div>
          <p>By</p>
          {
            searchOptions.map((item, i) => {
              return (
                <div key={`search-${i}`} onClick={() => setSearchBy(item)}>
                  <p>{item.toUpperCase()}</p>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default SearchBar
