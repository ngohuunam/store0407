// import Vue from 'vue'
// const loading = require('@/assets/loading.jpg')

export const clearModal = state => {
  state.modal = []
}

export const toModal = (state, cardObj) => {
  state.modal = cardObj.id.map((_id, i) => {
    const color = _id.substring(_id.indexOf('.') + 1, _id.indexOf('-'))
    const sizeObjs = cardObj.info.quantity[color]
    const base64 = [cardObj.base64[i]]
    let hexs
    let sizes = []
    for (let key in sizeObjs) {
      const size = key
      const price = sizeObjs[key].price
      hexs = [sizeObjs[key].hex]
      const quantity = sizeObjs[key].quantity
      const _size = `Size ${size}: ${price}.000đ, SL: ${quantity}`
      sizes.push(_size)
    }
    return {
      name: _id,
      base64: base64,
      info: {
        hexs: hexs,
        sizes: sizes,
      },
    }
  })
}

export const fetchList = (state, rxSetListDoc) => {
  state.list = rxSetListDoc
}

export const init = (state, rxdb) => {
  if (rxdb) {
    state.rxItem = rxdb.item
    state.rxImage = rxdb.image
  }
  if (state.list.value && state.list.value.length) {
    state.ready = true
    const list = state.list.value
    list.forEach(name => {
      state.cards.push({ name: name, id: [], base64: [], picked: false, info: {} })
    })
  }
}

export const pushImgObj = (state, imgObj) => {
  const index = state.cards.findIndex(card => card.name === imgObj.name)
  if (index > -1) {
    state.cards[index].base64 = state.cards[index].base64.concat(imgObj.base64)
    state.cards[index].id = state.cards[index].id.concat(imgObj.id)
  } else state.cards.push(imgObj)
}

export const pushInfoObj = (state, infoObj) => {
  const index = state.cards.findIndex(card => card.name === infoObj.name)
  if (index > -1) {
    state.cards[index].info = infoObj.info
  } else state.cards.push(infoObj)
}

export const spliceCard = (state, name) => {
  const index = state.cards.findIndex(_cardObj => _cardObj.name === name)
  if (index > -1) state.cards.splice(index, 1)
}

export const subsImg = (state, img$) => {
  state.img$ = img$
}

export const subsItem = (state, item$) => {
  state.item$ = item$
}
