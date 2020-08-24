import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  toggleItemToFavs,
} from './../itemsSlice'

const ItemsList = ({ isComplete }) => {
  const itemsList = useSelector((state) => state.items.list)
  const dispatch = useDispatch()
  return (
    <div>
      {
        itemsList.map((item, i) => {
          if (item.isSearchResult && isComplete) {
            return (
              <div key={`${i}-item`}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}€</p>
                <p>{item.email}</p>
                <img src={item.image} alt=''/>
                <p onClick={() => dispatch(toggleItemToFavs(item.title))}>{item.isFav ? 'Favourite Item' : 'Regular item'}</p>
              </div>
            )
          } else if (!isComplete && item.isFav && item.isFavSearchResult) {
            return (
              <div key={`${i}-fav-item`}>
                <p>{item.title}</p>
                <img src={item.image} alt=''/>
                <p onClick={() => dispatch(toggleItemToFavs(item.title))}>{item.isFav ? 'Favourite Item' : 'Regular item'}</p>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default ItemsList
