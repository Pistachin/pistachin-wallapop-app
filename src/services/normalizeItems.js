export const normalizeItems = (items) => {
  const normalizedItems = items.map(item => {
    item.description = item.description || ''
    item.email = item.email || ''
    item.image = item.image || ''
    item.isFav = false
    item.price = item.price || ''
    item.title = item.title || ''
    item.isSearchResult = true
    item.isFavSearchResult = true
    return item
  })
  return normalizedItems
}
