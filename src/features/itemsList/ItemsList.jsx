import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  toggleItemToFavs,
} from './../itemsSlice'

const ItemsList = ({ isComplete }) => {
  const itemsList = useSelector((state) => state.items.list)
  const minPrice = useSelector((state) => state.items.minPrice)
  const maxPrice = useSelector((state) => state.items.maxPrice)
  const pagination = useSelector((state) => state.items.pagination)
  const dispatch = useDispatch()

  return (
    <div>
      {
        itemsList.map((item, i) => {
          const isInPriceRange = isComplete && maxPrice && Number(item.price) <= maxPrice && Number(item.price) >= minPrice
          const completeResult = (typeof isInPriceRange === 'undefined' || isInPriceRange) && item.isSearchResult && isComplete
          const favResult = item.isFav && item.isFavSearchResult && !isComplete
          return (
            ((completeResult && (i + 1) <= (pagination * 5)) || favResult) &&
            <div key={`${i}-item`}>
              <p>{item.title}</p>
              {
                isComplete &&
                <React.Fragment>
                  <p>{item.description}</p>
                  <p>{item.price}€</p>
                  <p>{item.email}</p>

                </React.Fragment>
              }
              <img src={item.image} alt=''/>
              <p onClick={() => {
                dispatch(toggleItemToFavs(item.title))
              }}>{item.isFav ? 'Favourite Item' : 'Regular item'}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ItemsList
