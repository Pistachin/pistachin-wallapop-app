import { cloneDeep } from 'lodash'

const sortItems = (sortedBy, order, list) => {
  if (list.length > 0) {
    return cloneDeep(list).sort((firstItem, secondItem) => {
      if (firstItem.isDisplayed && secondItem.isDisplayed) {
        const firstItemValue =
          sortedBy !== 'price'
            ? firstItem[sortedBy].toLowerCase()
            : Number(firstItem[sortedBy])
        const secondItemValue =
          sortedBy !== 'price'
            ? secondItem[sortedBy].toLowerCase()
            : Number(secondItem[sortedBy])
        if (firstItemValue > secondItemValue) {
          return order === 'descending' ? -1 : 1
        }
        if (secondItemValue > firstItemValue) {
          return order === 'descending' ? 1 : -1
        }
      }
      return 0
    })
  } else {
    return []
  }
}

export default sortItems
