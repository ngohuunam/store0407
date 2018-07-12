// import Vue from 'vue'
const loading = require('@/assets/loading.jpg')

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
    list.map(name => {
      state.cards.push({ name: name, base64: loading, picked: false, info: {} })
    })
  }
}

export const pushImgObj = (state, imgObj) => {
  const index = state.cards.findIndex(card => card.name === imgObj.name)
  if (index > -1) {
    state.cards[index].base64 = imgObj.base64
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
