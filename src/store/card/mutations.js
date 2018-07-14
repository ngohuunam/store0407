// import Vue from 'vue'
// const loading = require('@/assets/loading.jpg')

export const toOrder = (state, cartObjs) => {
  state.order = state.order.concat(cartObjs)
}

export const clearModal = state => {
  state.modal = []
}

export const spliceCart = (state, cartItems) => {
  cartItems.map(item => {
    const i = state.cart.findIndex(cartObj => cartObj.item === item)
    if (i > -1) state.cart.splice(i, 1)
  })
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
      const item = sizeObjs[key].item
      hexs = [sizeObjs[key].hex]
      const quantity = sizeObjs[key].quantity
      const inf = `Size ${size}: ${price}.000đ, SL: ${quantity}`
      sizes.push({ item: item, inf: inf, z: cardObj.name, id: _id, s: size, p: price, c: color, q: 1, h: sizeObjs[key].hex })
    }
    return {
      zet: cardObj.name,
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

export const refreshImgObj = (state, info) => {
  const card = state.cards.find(card => card.name === info.name)
  const idDeleteds = card.id.filter(_id => info.ids.indexOf(_id) < 0)
  idDeleteds.map(idDeleted => {
    const index = card.id.indexOf(idDeleted)
    card.id.splice(index, 1)
    card.base64.splice(index, 1)
  })
}

export const pushImgObj = (state, imgObj) => {
  const card = state.cards.find(card => card.name === imgObj.name)
  if (card) {
    const i = card.id.indexOf(imgObj.id)
    if (i < 0) {
      card.base64 = card.base64.concat(imgObj.base64)
      card.id = card.id.concat(imgObj.id)
    }
  } else state.cards.push(imgObj)
}

export const pushInfoObj = (state, infoObj) => {
  const card = state.cards.find(card => card.name === infoObj.name)
  if (card) {
    card.info = infoObj.info
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
