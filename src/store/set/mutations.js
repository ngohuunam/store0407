// import { filter } from 'rxjs/operators'

export const spliceSet = (state, param) => {
  let index = typeof param === 'string' ? state.sets.findIndex(set => set.name === param) : param
  state.setListed.splice(index, 1)
  state.sets.splice(index, 1)
}

export const getAll = (state, rxSetDocs) => {
  // console.log(rxSetDocs)
  state.sets = []
  state.sets = state.sets.concat(rxSetDocs)
  state.setListed = state.setList.value.slice(0)
}

export const pushSets = (state, rxSetDocs) => {
  state.sets = state.sets.concat(rxSetDocs)
  rxSetDocs.map(rxSetDoc => state.setListed.push(rxSetDoc.name))
}

export const pushSet = (state, rxSetDoc) => {
  state.sets.push(rxSetDoc)
  state.setListed.push(rxSetDoc.name)
}

export const sortSetsListed = state => {
  state.setListed.sort(function(a, b) {
    const nameA = a.toUpperCase()
    const nameB = b.toUpperCase()
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  })
}

export const clearSetsListed = state => {
  state.sets = []
  state.setListed = []
}

export const fecthSetList = (state, rxSetListDoc) => {
  state.setList = rxSetListDoc
  if (state.rxSets && state.setList.value) state.ready = true
}

export const init = (state, rxSetColl) => {
  if (rxSetColl) {
    state.rxSets = rxSetColl
    // console.log('init state.rxSets', state.rxSets)
  }
}
