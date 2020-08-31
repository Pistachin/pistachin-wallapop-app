import sortItems from '../../services/sortItems'
import { mockItems } from './mockItems'

const updatedItems = mockItems.map((item, i) => {
  if (i < 5) {
    item.isDisplayed = true
  }
  return item
})

describe('Items are sorted by: ', () => {
  test('title', () => {
    const sortedByTitle = sortItems('title', 'ascending', updatedItems)

    const firstItemTitle = sortedByTitle[0].title.toLowerCase()
    const secondItemTitle = sortedByTitle[1].title.toLowerCase()
    const thirdItemTitle = sortedByTitle[2].title.toLowerCase()
    const fourthItemTitle = sortedByTitle[3].title.toLowerCase()
    const fifthItemTitle = sortedByTitle[4].title.toLowerCase()

    expect(firstItemTitle < secondItemTitle).toEqual(true)
    expect(secondItemTitle < thirdItemTitle).toEqual(true)
    expect(thirdItemTitle < fourthItemTitle).toEqual(true)
    expect(fourthItemTitle < fifthItemTitle).toEqual(true)
  })

  test('description', () => {
    const sortedByDescription = sortItems(
      'description',
      'ascending',
      updatedItems,
    )

    const firstItemDescription = sortedByDescription[0].description.toLowerCase()
    const secondItemDescription = sortedByDescription[1].description.toLowerCase()
    const thirdItemDescription = sortedByDescription[2].description.toLowerCase()
    const fourthItemDescription = sortedByDescription[3].description.toLowerCase()
    const fifthItemDescription = sortedByDescription[4].description.toLowerCase()

    expect(firstItemDescription < secondItemDescription).toEqual(true)
    expect(secondItemDescription < thirdItemDescription).toEqual(true)
    expect(thirdItemDescription < fourthItemDescription).toEqual(true)
    expect(fourthItemDescription < fifthItemDescription).toEqual(true)
  })

  test('email', () => {
    const sortedByEmail = sortItems('email', 'ascending', updatedItems)

    const firstItemEmail = sortedByEmail[0].email.toLowerCase()
    const secondItemEmail = sortedByEmail[1].email.toLowerCase()
    const thirdItemEmail = sortedByEmail[2].email.toLowerCase()
    const fourthItemEmail = sortedByEmail[3].email.toLowerCase()
    const fifthItemEmail = sortedByEmail[4].email.toLowerCase()

    expect(firstItemEmail < secondItemEmail).toEqual(true)
    expect(secondItemEmail < thirdItemEmail).toEqual(true)
    expect(thirdItemEmail < fourthItemEmail).toEqual(true)
    expect(fourthItemEmail < fifthItemEmail).toEqual(true)
  })

  test('price', () => {
    const sortedByPrice = sortItems('price', 'ascending', updatedItems)

    const firstItemPrice = Number(sortedByPrice[0].price)
    const secondItemPrice = Number(sortedByPrice[1].price)
    const thirdItemPrice = Number(sortedByPrice[2].price)
    const fourthItemPrice = Number(sortedByPrice[3].price)
    const fifthItemPrice = Number(sortedByPrice[4].price)

    expect(firstItemPrice < secondItemPrice).toEqual(true)
    expect(secondItemPrice < thirdItemPrice).toEqual(true)
    expect(thirdItemPrice < fourthItemPrice).toEqual(true)
    expect(fourthItemPrice < fifthItemPrice).toEqual(true)
  })
})
