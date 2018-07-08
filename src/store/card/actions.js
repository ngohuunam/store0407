import { filter } from 'rxjs/operators'
const loading = require('@/assets/loading.jpg')

export const init = ({ state, commit, rootState, dispatch }) => {
  if (!state.ready) {
    const rxdb = rootState.rxdb
    if (rxdb) {
      rxdb.list
        .findOne('set')
        .exec()
        .then(rxSetListDoc => {
          // console.log(rxSetListDoc)
          if (rxSetListDoc) {
            commit('createStyle')
            commit('fetchList', rxSetListDoc)
            commit('init', rxdb)
            dispatch('fetchCards')
            dispatch('subsItem')
            dispatch('subsImg')
          }
        })
    }
  }
}

export const subsItem = ({ commit, state, dispatch }) => {
  const item$ = state.rxItem.$.pipe(filter(x => x != null)).subscribe(change => {
    console.log('item$ change: ', change)
    const zet = change.data.v.zet
    dispatch('fetchOne', zet)
  })
  // console.log('item$: ', item$)
  commit('subsItem', item$)
}

export const subsImg = ({ commit, state, dispatch }) => {
  const img$ = state.rxImage.$.pipe(filter(x => x != null)).subscribe(change => {
    console.log(change)
    const data = change.data
    const event = data.op
    const name = data.doc
    switch (event) {
      case 'INSERT':
        commit('pushImgObj', { name: name, data: loading, picked: false, info: {} })
        break
      case 'UPDATE':
        dispatch('updateImg', data)
        break
      case 'DELETE':
        commit('spliceCard', name)
    }
  })
  // console.log(img$)
  commit('subsImg', img$)
}

export const updateImg = ({ commit, state }, data) => {
  const name = data.doc
  const attName = data.v.imgs.length ? data.v.imgs[0] : ''
  if (attName) {
    state.rxImage
      .findOne(name)
      .exec()
      .then(rxDoc => {
        const rxAtt = rxDoc.getAttachment(attName)
        rxAtt.getStringData().then(base64 => commit('pushImgObj', { name: name, data: base64, picked: false, info: {} }))
      })
  } else commit('pushImgObj', { name: name, data: loading, picked: false, info: {} })
}

export const fetchCards = ({ commit, state }) => {
  state.list.value.forEach(setName => {
    state.rxItem
      .find({ $and: [{ zet: { $eq: setName } }, { quantity: { $gt: 0 } }] })
      .exec()
      .then(rxItemDocs => {
        // console.log(rxDocs)
        const info = fetchData(rxItemDocs)
        const infoObj = { name: setName, base64: loading, picked: false, info: info }
        commit('pushInfoObj', infoObj)
      })
    state.rxImage
      .findOne(setName)
      .exec()
      .then(rxImageDoc => {
        if (rxImageDoc && rxImageDoc.imgs.length) {
          const imgName = rxImageDoc.imgs[0]
          const imgAtt = rxImageDoc.getAttachment(imgName)
          imgAtt.getStringData().then(base64 => commit('pushImgObj', { name: setName, base64: base64, picked: false, info: {} }))
        }
      })
  })
}

export const fetchOne = ({ commit, state }, _zet) => {
  const rxItem = state.rxItem
  rxItem
    .find({ $and: [{ zet: { $eq: _zet } }, { quantity: { $gt: 0 } }] })
    .exec()
    .then(rxDocs => {
      // console.log(rxDocs)
      if (rxDocs && rxDocs.length) {
        const infoObj = fetchData(rxDocs)
        commit('pushSetInfo', infoObj)
      } else commit('spliceCard', _zet)
    })
}

const fetchData = rxDocs => {
  const _res = { name: '', hexs: [], sizes: [], price: 0, disc: 0, quantity: {}, info: [] }
  const infoObj = rxDocs.reduce((res, rxDoc) => {
    res.name = rxDoc.zet
    res.info = rxDoc.info
    if (res.hexs.indexOf(rxDoc.hex) < 0) res.hexs.push(rxDoc.hex)
    if (res.sizes.indexOf(rxDoc.size) < 0) res.sizes.push(rxDoc.size)
    res.price = rxDoc.price > res.price ? rxDoc.price : res.price
    res.disc = rxDoc.disc > res.disc ? rxDoc.disc : res.disc
    if (!res.quantity[rxDoc.color]) res.quantity[rxDoc.color] = {}
    if (!res.quantity[rxDoc.color][rxDoc.size]) res.quantity[rxDoc.color][rxDoc.size] = {}
    res.quantity[rxDoc.color][rxDoc.size].quantity = rxDoc.quantity
    res.quantity[rxDoc.color][rxDoc.size].price = rxDoc.price
    res.quantity[rxDoc.color][rxDoc.size].discount = rxDoc.disc
    res.quantity[rxDoc.color][rxDoc.size].hex = rxDoc.hex
    if (!res.quantity[rxDoc.size]) res.quantity[rxDoc.size] = {}
    if (!res.quantity[rxDoc.size][rxDoc.color]) res.quantity[rxDoc.size][rxDoc.color] = {}
    res.quantity[rxDoc.size][rxDoc.color].quantity = rxDoc.quantity
    res.quantity[rxDoc.size][rxDoc.color].price = rxDoc.price
    res.quantity[rxDoc.size][rxDoc.color].discount = rxDoc.disc
    res.quantity[rxDoc.size][rxDoc.color].hex = rxDoc.hex
    return res
  }, _res)
  // console.log('infoObj: ', infoObj)
  return infoObj
}