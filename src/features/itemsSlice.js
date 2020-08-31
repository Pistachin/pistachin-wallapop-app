import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    list: [],
    searchedWord: '',
    favouritesSearchedWord: '',
    sortedSettings: {
      by: 'title',
      order: 'ascending',
    },
    minPrice: 0,
    maxPrice: Number.MAX_SAFE_INTEGER,
    pagination: 1,
    hasFavourites: false,
  },
  reducers: {
    addItems: (state, action) => {
      state.list = action.payload.map((item, i) => {
        item.isDisplayed = i + 1 <= state.pagination * 5
        return item
      })
    },
    toggleItemToFavs: (state, action) => {
      state.list = [...state.list].map((item) => {
        if (action.payload === item.title) {
          item.isFav = !item.isFav
        }
        return item
      })
      state.hasFavourites = state.list.some((i) => i.isFav)
    },
    findItems: (state, action) => {
      state.searchedWord = action.payload
    },
    findFavouriteItems: (state, action) => {
      state.favouritesSearchedWord = action.payload
    },
    changeSortedSettings: (state, action) => {
      state.sortedSettings = {
        by: action.payload.by,
        order: action.payload.order,
      }
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload === 0 ? undefined : action.payload
    },
    loadMore: (state) => {
      state.pagination += 1
      state.list = state.list.map((item, i) => {
        item.isDisplayed = i + 1 <= (state.pagination + 1) * 5
        return item
      })
    },
  },
})

export const {
  addItems,
  toggleItemToFavs,
  findItems,
  findFavouriteItems,
  changeSortedSettings,
  setMinPrice,
  setMaxPrice,
  loadMore,
} = itemsSlice.actions

export default itemsSlice.reducer
