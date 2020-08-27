import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    list: [],
    searchedWord: '',
    favouritesSearchedWord: '',
    sortedSettings: {
      by: 'title',
      order: 'ascending'
    },
    minPrice: 0,
    maxPrice: undefined,
    pagination: 1
  },
  reducers: {
    addItems: (state, action) => {
      state.list = action.payload
    },
    toggleItemToFavs: (state, action) => {
      state.list = [...state.list].map(item => {
        if (action.payload === item.title) {
          item.isFav = !item.isFav
        }
        return item
      })
    },
    findItems: (state, action) => {
      state.searchedWord = action.payload
    },
    findFavouriteItems: (state, action) => {
      state.favouritesSearchedWord = action.payload
    },
    changeSortedSettings: (state, action) => {
      state.sortedSettings = { by: action.payload.by, order: action.payload.order }
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload === 0 ? undefined : action.payload
    },
    loadMore: state => { state.pagination += 1 }
  }
})

export const {
  addItems,
  toggleItemToFavs,
  findItems,
  findFavouriteItems,
  changeSortedSettings,
  setMinPrice,
  setMaxPrice,
  loadMore
} = itemsSlice.actions

export default itemsSlice.reducer
