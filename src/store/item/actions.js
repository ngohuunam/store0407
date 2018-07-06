export const fetch = ({ commit, state, rootState }) => {
  const rxItems = state.rxItems
  const zets = rootState.image.list.value
  zets.forEach(_zet =>
    rxItems
      .find({ $and: [{ zet: { $eq: _zet } }, { quantity: { $gt: 0 } }] })
      .exec()
      .then(rxDocs => {
        // console.log(rxDocs)
        const _res = { name: _zet, colors: [], sizes: [], price: 0, disc: 0, quantity: {} }
        const infoObj = rxDocs.reduce((res, rxDoc) => {
          if (!res.colors.some(color => color.label === rxDoc.color)) res.colors.push({ label: rxDoc.color, hex: rxDoc.hex })
          if (res.sizes.indexOf(rxDoc.size) < 0) res.sizes.push(rxDoc.size)
          res.price = rxDoc.price > res.price ? rxDoc.price : res.price
          res.disc = rxDoc.disc > res.disc ? rxDoc.disc : res.disc
          if (!res.quantity[rxDoc.color]) res.quantity[rxDoc.color] = {}
          res.quantity[rxDoc.color][rxDoc.size] = rxDoc.quantity
          res.quantity[rxDoc.color].price = rxDoc.price
          res.quantity[rxDoc.color].discount = rxDoc.disc
          if (!res.quantity[rxDoc.size]) res.quantity[rxDoc.size] = {}
          res.quantity[rxDoc.size][rxDoc.color] = rxDoc.quantity
          res.quantity[rxDoc.size].price = rxDoc.price
          res.quantity[rxDoc.size].discount = rxDoc.disc
          return res
        }, _res)
        console.log(infoObj)
        commit('pushSetInfo', infoObj)
      }),
  )
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
          dispatch('fetch')
        }
      })
  }
}
