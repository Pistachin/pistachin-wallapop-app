import _ from 'lodash'

const searchItems = (items, filterType, filterValue, isComplete) => {
  if (items.length > 0) {
    const newItems = _.cloneDeep(items)
    newItems.map((item, i) => {
      if (filterValue === '' || item[filterType].toLowerCase().includes(filterValue.toLowerCase())) {
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