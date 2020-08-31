import normalizeItems from '../../services/normalizeItems'
import { mockItems, randomIndex } from './mockItems'

test('Items to have all keys', () => {
  const newItems = normalizeItems(mockItems)
  const randomItem = newItems[randomIndex(10)]
  expect(randomItem).toHaveProperty('description')
  expect(randomItem).toHaveProperty('email')
  expect(randomItem).toHaveProperty('image')
  expect(randomItem).toHaveProperty('isFav')
  expect(randomItem).toHaveProperty('price')
  expect(randomItem).toHaveProperty('title')
  expect(randomItem).toHaveProperty('isSearchResult')
  expect(randomItem).toHaveProperty('isFavSearchResult')
})
