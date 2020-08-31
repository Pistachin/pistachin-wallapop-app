import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleItemToFavs } from './../itemsSlice'

const classnames = require('classnames')

const ItemsList = ({ isComplete }) => {
  const itemsList = useSelector((state) => state.items.list)
  const minPrice = useSelector((state) => state.items.minPrice)
  const maxPrice = useSelector((state) => state.items.maxPrice)
  const pagination = useSelector((state) => state.items.pagination)
  const dispatch = useDispatch()

  const defaultClasses = {}
  const completeClasses = {
    ...defaultClasses,
    grid: true,
    'grid-cols-1': true,
    'md:grid-cols-2': true,
    'lg:grid-cols-4': true,
    'gap-3': true,
    'px-8': true,
  }
  const favouritesClasses = {
    ...defaultClasses,
    flex: true,
    'flex-col': true,
    'space-y-2': true,
    'my-2': true,
  }

  const itemDefaultClasses = {
    flex: true,
    'flex-col': true,
    relative: true,
    'bg-white': true,
    'border-gray-400': true,
    'p-2': true,
    border: true,
    'rounded-md': true,
  }
  const itemCompleteClasses = {
    ...itemDefaultClasses,
    'h-500': true,
    'justify-between': true,
  }
  const itemFavouritesClasses = {
    ...itemDefaultClasses,
    'w-full': true,
  }

  return (
    <div
      className={classnames(isComplete ? completeClasses : favouritesClasses)}
    >
      {itemsList.map((item, i) => {
        const isInPriceRange =
          isComplete &&
          maxPrice &&
          Number(item.price) <= maxPrice &&
          Number(item.price) >= minPrice
        const completeResult =
          (typeof isInPriceRange === 'undefined' || isInPriceRange) &&
          item.isSearchResult &&
          isComplete
        const favResult = item.isFav && item.isFavSearchResult && !isComplete
        return (
          ((completeResult && i + 1 <= pagination * 5) || favResult) && (
            <div
              className={classnames(
                isComplete ? itemCompleteClasses : itemFavouritesClasses,
              )}
              key={`${i}-item`}
            >
              <div
                className={classnames(
                  'flex',
                  'items-start',
                  'justify-center',
                  'rounded-md',
                  'w-full',
                  'h-2/3',
                  'mb-2',
                  { 'order-1': !favResult },
                  { 'order-2': favResult },
                )}
              >
                <img
                  className='rounded-md max-h-full'
                  loading='lazy'
                  src={item.image}
                  alt=''
                />
              </div>
              <div
                className={classnames(
                  'flex',
                  'flex-col',
                  'justify-between',
                  'w-full',
                  'h-1/3',
                  { 'order-1': favResult },
                  { 'order-2': !favResult },
                  { 'mb-2': favResult },
                )}
              >
                {isComplete && (
                  <p className='text-lg font-semibold'>{item.price}€</p>
                )}
                <p
                  className={classnames('text-gray-800', {
                    'font-semibold': favResult,
                  })}
                >
                  {item.title}
                </p>
                {isComplete && (
                  <React.Fragment>
                    <p className='text-sm text-justify font-light text-gray-600 clamp-3'>
                      {item.description}
                    </p>
                    <a
                      className='text-sm font-light text-gray-800'
                      href={`mailto:${item.email}?subject=${item.title} - ${item.price}`}
                    >
                      {item.email}
                    </a>
                  </React.Fragment>
                )}
              </div>
              <button
                className={classnames(
                  'h-6',
                  'w-6',
                  'absolute',
                  'right-0',
                  { 'bottom-0': !favResult },
                  { 'm-5': !favResult },
                  { 'top-0': favResult },
                  { 'mr-5': favResult },
                  'px-1',
                  { 'py-1': !favResult },
                )}
                onClick={() => {
                  dispatch(toggleItemToFavs(item.title))
                }}
              >
                <svg
                  className={classnames({
                    'h-8': true,
                    'w-8': true,
                    'text-gray-300': !item.isFav,
                    'text-blue-600': item.isFav,
                    'p-1': true,
                    'm-1': true,
                    'fill-current': true,
                    transition: true,
                    'duration-150': true,
                  })}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              </button>
            </div>
          )
        )
      })}
    </div>
  )
}

export default ItemsList
