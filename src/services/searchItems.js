import { cloneDeep } from 'lodash'

const searchItems = (items, filterType, filterValue, isComplete) => {
  if (items.length > 0) {
    const newItems = cloneDeep(items)
    newItems.map((item, i) => {
      const valueToCheck =
        filterType !== 'price'
          ? item[filterType].toLowerCase().includes(filterValue.toLowerCase())
          : filterValue === item[filterType]
      if (filterValue === '' || valueToCheck) {
        if (isComplete) {
          item.isSearchResult = true
        } else {
          item.isFavSearchResult = true
        }
      } else {
        if (isComplete) {
          item.isSearchResult = false
        } else {
          item.isFavSearchResult = false
        }
      }
      return item
    })
    return newItems
  } else {
    return items
  }
}

export default searchItems
