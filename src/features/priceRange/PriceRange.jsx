import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMinPrice, setMaxPrice } from './../itemsSlice'

const classnames = require('classnames')

const PriceRange = () => {
  const [usedMinPrice, setUsedMinPrice] = useState(0)
  const [usedMaxPrice, setUsedMaxPrice] = useState('')
  const [showPriceRange, setShowPriceRange] = useState(false)
  const dispatch = useDispatch()

  const mainClasses = classnames('flex', 'relative', 'p-1')

  const buttonClasses = classnames(
    'px-3',
    'py-2',
    'flex',
    'space-x-2',
    'text-gray-800',
    'font-light',
    'shadow-lg',
    'rounded-full',
    'items-center',
    'hover:bg-wallapop-gray',
  )

  const rangeClasses = classnames(
    'flex',
    'absolute',
    'top-full',
    'mt-2',
    'p-3',
    'bg-white',
    'z-10',
    'shadow-xl',
    'rounded-lg',
    'space-x-2',
    'border',
    'border-wallapop-main',
  )

  const rangeOptionsClasses = classnames(
    'flex',
    'flex-col',
    'space-y-2',
    'w-24',
    'font-light',
  )

  const rangeInputClasses = classnames(
    'border-wallapop-main',
    'border',
    'rounded-lg',
    'px-3',
    'py-1',
    'font-light',
  )

  return (
    <div className={mainClasses}>
      <button
        onClick={() => setShowPriceRange(!showPriceRange)}
        className={buttonClasses}
      >
        <svg
          className='h-5 w-5 stroke-current'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <p>Price</p>
      </button>
      {showPriceRange && (
        <div className={rangeClasses}>
          <div className={rangeOptionsClasses}>
            <label htmlFor='range-from'>From:</label>
            <input
              type='number'
              name='range-from'
              className={rangeInputClasses}
              min={0}
              max={usedMaxPrice}
              value={usedMinPrice}
              onChange={(e) => {
                setUsedMinPrice(e.target.value)
                dispatch(setMinPrice(Number(e.target.value)))
              }}
            />
          </div>
          <div className={rangeOptionsClasses}>
            <label htmlFor='range-to'>To:</label>
            <input
              type='number'
              name='range-to'
              className={rangeInputClasses}
              min={usedMinPrice}
              max={Number.MAX_SAFE_INTEGER}
              value={usedMaxPrice}
              onChange={(e) => {
                setUsedMaxPrice(e.target.value)
                if (!isNaN(e.target.value)) {
                  dispatch(setMaxPrice(Number(e.target.value)))
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PriceRange
