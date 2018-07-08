export const simple = (state, getters, rootState) => query => {
  const imageObjs = rootState.image.imgs
  const infos = rootState.item.setInfos
  const cards = imageObjs.map(imgObj => {
    let res = { name: '', base64: '', hexs: [], isSale: false, price: '', sizes: [], quantity: '' }
    const info = infos.find(_inf => _inf.name === imgObj.name)
    res.base64 = imgObj.data
    res.name = imgObj.name
    if (info) {
      res.hexs = info.colors.map(color => color.hex)
      res.isSale = info.disc > 0
      res.price = info.price
      res.sizes = info.sizes
      res.quantity = info.quantity
    }
    console.log(res)
    return res
  })
  switch (query) {
    case 'all':
      console.log(cards)
      return cards
  }
}
