import React, { useState } from 'react'
import SearchBar from '../searchBar/SearchBar'
import ItemsList from '../itemsList/ItemsList'

const Favourites = () => {
  const [showFavourites, setShowFavourites] = useState(false)
  return (
    <div>
      <p onClick={() => setShowFavourites(!showFavourites)}>{showFavourites ? 'Hide' : 'Show'} Favourites</p>
      {
        showFavourites &&
        <React.Fragment>
          <SearchBar isComplete={false} />
          <ItemsList isComplete={false} />
        </React.Fragment>
      }
    </div>
  )
}

export default Favourites