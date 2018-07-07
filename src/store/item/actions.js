import { filter } from 'rxjs/operators'

export const subscribe = ({ commit, state, dispatch }) => {
  const item$ = state.rxItems.$.pipe(filter(x => x != null)).subscribe(change => {
    console.log('item$ change: ', change)
    const zet = change.data.v.zet
    const event = change.data.op
    switch (event) {
      case 'INSERT':
      case 'UPDATE':
        dispatch('fetchOne', zet)
        break
      case 'DELETE':
        commit('spliceSetInfo', zet)
    }
  })
  // console.log('item$: ', item$)
  commit('subscribe', item$)
}

export const fetchOne = ({ commit, state }, _zet) => {
  const rxItems = state.rxItems
  rxItems
    .find({ $and: [{ zet: { $eq: _zet } }, { quantity: { $gt: 0 } }] })
    .exec()
    .then(rxDocs => {
      // console.log(rxDocs)
      const infoObj = calData(rxDocs)
      commit('pushSetInfo', infoObj)
    })
}

export const fetchAll = ({ rootState, dispatch }) => {
  const zets = rootState.image.list.value
  zets.forEach(zet => dispatch('fetchOne', zet))
}

export const init = ({ commit, rootState, dispatch }) => {
  const rxdb = rootState.rxdb
  if (rxdb) {
    commit('init', rxdb.item)
    rxdb.list
      .findOne('item')
      .exec()
      .then(rxItemListDoc => {
        // console.log(rxSetListDoc)
        if (rxItemListDoc) {
          commit('fecthItemList', rxItemListDoc)
          dispatch('fetchAll')
          dispatch('subscribe')
        }
      })
  }
}

const calData = rxDocs => {
  const _res = { name: '', colors: [], sizes: [], price: 0, disc: 0, quantity: {} }
  const infoObj = rxDocs.reduce((res, rxDoc) => {
    res.name = rxDoc.zet
    if (!res.colors.some(color => color.label === rxDoc.color)) res.colors.push({ label: rxDoc.color, hex: rxDoc.hex })
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
