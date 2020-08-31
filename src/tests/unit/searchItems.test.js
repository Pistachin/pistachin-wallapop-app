import searchItems from '../../services/searchItems'
import { mockItems } from './mockItems'

describe('I can search by: ', () => {
  describe('Title', () => {
    test('And get results', () => {
      const searchResult = searchItems(mockItems, 'title', 'ba', true).filter(
        (item) => {
          return item.isSearchResult
        },
      )
      expect(searchResult.length).toBeGreaterThanOrEqual(1)
      expect(searchResult.length).toBeLessThan(10)
    })
    test("And don't get results", () => {
      const searchResult = searchItems(
        mockItems,
        'title',
        'The cake is a lie',
        true,
      ).filter((item) => {
        return item.isSearchResult
      })
      expect(searchResult).toHaveLength(0)
    })
  })
  describe('Description', () => {
    test('And get results', () => {
      const searchResult = searchItems(
        mockItems,
        'description',
        'ba',
        true,
      ).filter((item) => {
        return item.isSearchResult
      })
      expect(searchResult.length).toBeGreaterThanOrEqual(1)
      expect(searchResult.length).toBeLessThan(10)
    })
    test("And don't get results", () => {
      const searchResult = searchItems(
        mockItems,
        'description',
        'The cake is a lie',
        true,
      ).filter((item) => {
        return item.isSearchResult
      })
      expect(searchResult).toHaveLength(0)
    })
  })
  describe('Email', () => {
    test('And get results', () => {
      const searchResult = searchItems(mockItems, 'email', 'ba', true).filter(
        (item) => {
          return item.isSearchResult
        },
      )
      expect(searchResult.length).toBeGreaterThanOrEqual(1)
      expect(searchResult.length).toBeLessThan(10)
    })
    test("And don't get results", () => {
      const searchResult = searchItems(
        mockItems,
        'email',
        'The cake is a lie',
        true,
      ).filter((item) => {
        return item.isSearchResult
      })
      expect(searchResult).toHaveLength(0)
    })
  })
  describe('Price', () => {
    test('And get results', () => {
      const searchResult = searchItems(mockItems, 'price', '250', true).filter(
        (item) => {
          return item.isSearchResult
        },
      )
      expect(searchResult.length).toBeGreaterThanOrEqual(1)
      expect(searchResult.length).toBeLessThan(10)
    })
    test("And don't get results", () => {
      const searchResult = searchItems(mockItems, 'price', '33', true).filter(
        (item) => {
          return item.isSearchResult
        },
      )
      expect(searchResult).toHaveLength(0)
    })
  })
})
