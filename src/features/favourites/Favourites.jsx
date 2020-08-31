import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SearchBar from '../searchBar/SearchBar'
import ItemsList from '../itemsList/ItemsList'
const classnames = require('classnames')

const Favourites = () => {
  const [showFavourites, setShowFavourites] = useState(false)
  const hasFavourites = useSelector((state) => state.items.hasFavourites)
  const favouritesClasses = classnames(
    'bg-gray-200',
    'duration-500',
    'flex-col',
    'flex',
    'md:absolute',
    'md:max-h-1/3',
    'md:max-w-1/4',
    'mx-2',
    'md:right-0',
    'md:top-0',
    'my-2',
    'overflow-y-auto',
    'p-2',
    'rounded',
    'transition',
    'w-10',
    'md:z-10',
    { 'border-gray-600': showFavourites },
    { 'md:w-1/4': showFavourites },
    { 'md:w-auto': !showFavourites },
    { 'shadow-lg': showFavourites },
    { 'w-auto': showFavourites },
    { border: showFavourites },
  )

  const titleClasses = classnames('flex', 'md:space-x-2', {
    'mb-3': showFavourites,
  })

  return (
    <div className={favouritesClasses}>
      <div className={titleClasses}>
        <button onClick={() => setShowFavourites(!showFavourites)}>
          <svg
            className={classnames({
              'text-blue-600': true,
              'h-6': true,
              'w-6': true,
              'fill-current': hasFavourites,
            })}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
            />
          </svg>
        </button>
        {showFavourites && <p>Your favourites selection!</p>}
      </div>
      {showFavourites && (
        <React.Fragment>
          <SearchBar isComplete={false} />
          <ItemsList isComplete={false} />
        </React.Fragment>
      )}
    </div>
  )
}

export default Favourites
