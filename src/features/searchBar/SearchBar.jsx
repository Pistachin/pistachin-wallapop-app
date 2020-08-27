import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'
import {
  findItems,
  addItems,
  findFavouriteItems
} from './../itemsSlice'
import searchItems from '../../services/searchItems'

const classnames = require('classnames')

const SearchBar = ({ isComplete, searchOptions }) => {
  const [inputSearchValue, setInputSearchValue] = useState('')
  const [searchBy, setSearchBy] = useState('title')
  const [showByOptions, setShowByOptions] = useState(false)
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

  const mainClasses = classnames(
    'flex',
    'items-center',
    'space-x-2',
    'relative',
  )

  const mainButtonClasses = classnames(
    'pl-4',
    'pr-1',
    'border-l',
    'border-wallapop-main',
    'py-1',
    'flex',
    'space-x-2',
    'text-gray-800',
    'font-light',
    'rounded-r-full',
    'items-center'
  )

  const searchBarClasses = classnames(
    'border',
    'border-wallapop-main',
    'rounded-full',
    'flex',
    'px-4',
    'items-center',
    'space-x-2',
    'bg-white',
    { 'py-1': isComplete },
  )

  const optionsListClasses = classnames(
    'flex',
    'flex-col',
    'absolute',
    'top-full',
    'mt-2',
    'p-3',
    'bg-white',
    'z-10',
    'shadow-xl',
    'rounded-lg',
    'border',
    'border-wallapop-main'
  )

  const optionButtonClasses = classnames(
    'font-light',
    'text-white',
    'm-1',
    'rounded-full',
    'px-3',
    'py-1',
    'bg-wallapop-main',
    'hover:bg-wallapop-hover-dark'
  )

  useEffect(() => {
    updateSearch()
  }, [inputSearchValue])

  useEffect(() => {
    const updatedItems = searchItems(itemsList, searchBy, searchedWord, isComplete)
    dispatch(addItems(updatedItems))
  }, [searchedWord, searchBy])

  return (
    <div className={mainClasses}>
      <div className={searchBarClasses}>
        <svg className='h-5 w-5 text-wallapop-main stroke-current' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type='text' placeholder='Search...' value={inputSearchValue} onChange={(e) => editSearchValue(e.target.value)}/>
        {
          isComplete &&
          <div className='relative'>
            <button onClick={() => setShowByOptions(!showByOptions)} className={mainButtonClasses}>By: {_.startCase(searchBy)}</button>
            {
              showByOptions &&
              <div className={optionsListClasses}>
                {
                  searchOptions.map((item, i) => {
                    return (
                      <button
                        className={optionButtonClasses}
                        key={`search-by-${i}`}
                        onClick={() => {
                          setSearchBy(item)
                          setShowByOptions(!showByOptions)
                        } }>
                        {_.startCase(item)}
                      </button>
                    )
                  })
                }
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default SearchBar
