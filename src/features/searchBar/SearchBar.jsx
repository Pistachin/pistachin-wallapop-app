import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  findItems,
  addItems,
  findFavouriteItems
} from './../itemsSlice'
import searchItems from '../../services/searchItems'

const SearchBar = ({ isComplete }) => {
  const [searchValue, setSearchValue] = useState('')
  const searchedWord = useSelector((state) => state.items.searchedWord)
  const favouritesSearchedWord = useSelector((state) => state.items.favouritesSearchedWord)
  const itemsList = useSelector((state) => state.items.list)
  const dispatch = useDispatch()
  const searchOptions = [
    {
      name: 'title',
    },
    {
      name: 'description',
    },
    {
      name: 'price',
    },
    {
      name: 'email',
    },
  ]

  let searchTimeout
  const editSearchValue = (val) => {
    window.clearTimeout(searchTimeout)
    setSearchValue(val)
  }

  const updateSearch = () => {
    if (isComplete) {
      searchTimeout = window.setTimeout(() => dispatch(findItems(searchValue)), 500)
    } else {
      searchTimeout = window.setTimeout(() => dispatch(findFavouriteItems(searchValue)), 500)
    }
  }

  useEffect(() => {
    updateSearch()
  }, [searchValue])

  useEffect(() => {
    const updatedItems = searchItems(itemsList, 'title', isComplete ? searchedWord : favouritesSearchedWord, isComplete)
    dispatch(addItems(updatedItems))
  }, [searchedWord, favouritesSearchedWord])

  return (
    <div>
      <input type='text' value={searchValue} onChange={(e) => editSearchValue(e.target.value)}/>
      {
        isComplete &&
        <div>
          <p>By</p>
          {
            searchOptions.map((item, i) => {
              return (
                <div key={`search-${i}`}>
                  <p>{item.name.toUpperCase()}</p>
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
