import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startCase } from 'lodash'
import { addItems, changeSortedSettings } from './../itemsSlice'
import sortItems from '../../services/sortItems'

const classnames = require('classnames')

const Sorter = ({ sortOptions }) => {
  const sortedSettings = useSelector((state) => state.items.sortedSettings)
  const itemsList = useSelector((state) => state.items.list)
  const [listLength, setListLength] = useState(itemsList.length)
  const [showSortOptions, setShowSortOptions] = useState(false)
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

  const mainClasses = classnames('flex', 'relative', 'my-2')

  const sortSettingsClasses = classnames(
    'flex',
    'absolute',
    'top-full',
    'mt-1',
    'p-3',
    'bg-white',
    'z-10',
    'shadow-xl',
    'rounded-lg',
    'space-x-4',
    'items-center',
    'border',
    'border-wallapop-main',
  )

  const optionsListClasses = classnames('flex', 'flex-col', 'space-y-2')

  const optionButtonClasses = classnames(
    'font-light',
    'text-white',
    'rounded-full',
    'px-3',
    'py-1',
    'bg-wallapop-main',
    'hover:bg-wallapop-hover-dark',
  )

  const orderClasses = classnames(
    'flex',
    'flex-col',
    'space-y-1',
    'items-stretch',
  )

  const orderButton = classnames(
    'flex',
    'items-center',
    'justify-between',
    'space-x-2',
    'border',
    'border-wallapop-main',
    'rounded-md',
    'px-2',
    'py-1',
    'hover:border-wallapop-hover-dark',
  )

  return (
    <div className='flex'>
      <div className={mainClasses}>
        <button
          onClick={() => setShowSortOptions(!showSortOptions)}
          className='flex items-center space-x-2 text-sm'
        >
          <p>Sort by: {startCase(sortedSettings.by)}</p>
          <svg
            className='h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {sortedSettings.order === 'ascending' ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4'
              />
            )}
          </svg>
        </button>
        {showSortOptions && (
          <div className={sortSettingsClasses}>
            <button
              onClick={() => setShowSortOptions(!showSortOptions)}
              className='m-2 text-gray-800 h-5 w-5 absolute top-0 right-0'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <div className={optionsListClasses}>
              {sortOptions.map((opt, i) => {
                return (
                  <button
                    className={optionButtonClasses}
                    key={`sort-option-${i}`}
                    onClick={() =>
                      dispatch(
                        changeSortedSettings({
                          by: opt,
                          order: sortedSettings.order,
                        }),
                      )
                    }
                  >
                    {startCase(opt)}
                  </button>
                )
              })}
            </div>
            <div className={orderClasses}>
              <p>Order:</p>
              <button
                className={orderButton}
                onClick={() =>
                  dispatch(
                    changeSortedSettings({
                      by: sortedSettings.by,
                      order: 'ascending',
                    }),
                  )
                }
              >
                <p>Ascending</p>
                <svg
                  className='h-4 w-4 text-gray-600'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12'
                  />
                </svg>
              </button>
              <button
                className={orderButton}
                onClick={() =>
                  dispatch(
                    changeSortedSettings({
                      by: sortedSettings.by,
                      order: 'descending',
                    }),
                  )
                }
              >
                <p>Descending</p>
                <svg
                  className='h-4 w-4 text-gray-600'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4'
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sorter
