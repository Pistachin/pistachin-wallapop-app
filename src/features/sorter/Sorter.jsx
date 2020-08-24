import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import {
  addItems,
  changeSortedSettings
} from './../itemsSlice'
import sortItems from '../../services/sortItems'

const Sorter = ({ sortOptions }) => {
  const sortedSettings = useSelector((state) => state.items.sortedSettings)
  const itemsList = useSelector((state) => state.items.list)
  const [listLength, setListLength] = useState(itemsList.length)
  const dispatch = useDispatch()

  useEffect(() => {
    const sorted = sortItems(sortedSettings.by, sortedSettings.order, itemsList)
    dispatch(addItems(sorted))
  }, [sortedSettings, listLength])

  useEffect(() => {
    if (itemsList.length !== listLength) {
      setListLength(itemsList.length)
    }
  }, [itemsList])

  return (
    <div>
      <p>Sort by:</p>
      {
        sortOptions.map((opt, i) => {
          return (
            <div key={`sort-option-${i}`} onClick={() => dispatch(changeSortedSettings({ by: opt, order: sortedSettings.order }))}>
              <p>{_.startCase(opt)}</p>
            </div>
          )
        })
      }
      <div>
        <p>Order:</p>
        <p onClick={() => dispatch(changeSortedSettings({ by: sortedSettings.by, order: 'ascending' }))}>Ascending</p>
        <p onClick={() => dispatch(changeSortedSettings({ by: sortedSettings.by, order: 'descending' }))}>Descending</p>
      </div>
    </div>
  )
}

export default Sorter