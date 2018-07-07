import { filter } from 'rxjs/operators'
const loading = require('@/assets/loading.jpg')

export const subscribe = ({ commit, state, dispatch }) => {
  const img$ = state.rxImgs.$.pipe(filter(x => x != null)).subscribe(change => {
    console.log(change)
    const data = change.data
    const event = data.op
    const name = data.doc
    switch (event) {
      case 'INSERT':
        commit('pushImgObj', { name: name, data: loading, picked: false })
        break
      case 'UPDATE':
        dispatch('UPDATE', data)
        break
      case 'DELETE':
        commit('spliceImgObj', name)
    }
  })
  console.log(img$)
  commit('subscribe', img$)
}

export const UPDATE = ({ commit, state }, data) => {
  const name = data.doc
  const attName = data.v.imgs.length ? data.v.imgs[0] : ''
  if (attName) {
    state.rxImgs
      .findOne(name)
      .exec()
      .then(rxDoc => {
        const rxAtt = rxDoc.getAttachment(attName)
        rxAtt.getStringData().then(base64 => commit('pushImgObj', { name: name, data: base64, picked: false }))
      })
  } else {
    commit('spliceImgObj', name)
  }
}

export const fetchImgs = ({ commit, state }) => {
  state.list.value.forEach(docName => {
    state.rxImgs
      .findOne(docName)
      .exec()
      .then(rxImgDoc => {
        if (rxImgDoc && rxImgDoc.imgs.length) {
          const imgName = rxImgDoc.imgs[0]
          const imgAtt = rxImgDoc.getAttachment(imgName)
          imgAtt.getStringData().then(base64 => commit('pushImgObj', { name: docName, data: base64 }))
        }
      })
  })
}

// export const fetchImgs = ({ commit, state }) => {
//   state.rxImgs
//     .find()
//     .exec()
//     .then(rxImgDocs => {
//       if (rxImgDocs.length) {
//         rxImgDocs.forEach(doc => {
//           if (doc.imgs.length) {
//             const imgName = doc.imgs[0]
//             const imgAtt = doc.getAttachment(imgName)
//             imgAtt.getStringData().then(base64 => commit('pushImgObj', { name: doc.name, data: base64 }))
//           }
//         })
//       }
//     })
// }

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
            commit('fecthImageList', rxSetListDoc)
            commit('init', rxdb.image)
            dispatch('fetchImgs')
            dispatch('subscribe')
          }
        })
    }
  }
}
