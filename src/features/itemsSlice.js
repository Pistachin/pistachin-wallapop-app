import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    list: [],
    searchedWord: '',
    favouritesSearchedWord: ''
  },
  reducers: {
    addItems: (state, action) => {
      state.list = action.payload
    },
    toggleItemToFavs: (state, action) => {
      state.list = [...state.list].map(item => {
        if (action.payload === item.title) {
          item.isFav = !item.isfav
        }
        return item
      })
    },
    findItems: (state, action) => {
      state.searchedWord = action.payload
    },
    findFavouriteItems: (state, action) => {
      state.favouritesSearchedWord = action.payload
    }
  }
})

export const { addItems, toggleItemToFavs, findItems, findFavouriteItems } = itemsSlice.actions

export default itemsSlice.reducer
