import _ from 'lodash'

const sortItems = (by, order, list) => {
  if (list.length > 0) {
    return _.cloneDeep(list).sort((a, b) => {
      const aValue = by !== 'price' ? a[by].toLowerCase() : Number(a[by])
      const bValue = by !== 'price' ? b[by].toLowerCase() : Number(b[by])
      if (aValue > bValue) {
        return order === 'descending' ? -1 : 1
      }
      if (aValue < bValue) {
        return order === 'descending' ? 1 : -1
      }
      return 0
    })
  } else {
    return []
  }
}

export default sortItems