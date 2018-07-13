export const img = state => cartObj => {
  if (cartObj) {
    const name = cartObj.z
    const cardObj = state.cards.find(card => card.name === name)
    const id = cartObj.id
    const index = cardObj.id.findIndex(_id => _id === id)
    return cardObj.base64[index]
  }
}
