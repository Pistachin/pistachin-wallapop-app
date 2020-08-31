export const getItems = async () => {
  const response = await fetch('/items.json')
  return await response.json()
}