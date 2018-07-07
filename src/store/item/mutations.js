import Vue from 'vue'

export const spliceSetInfo = (state, name) => {
  const index = state.setInfos.findIndex(info => info.name === name)
  if (index > -1) state.setInfos.splice(index, 1)
}

export const pushSetInfo = (state, infoObj) => {
  const index = state.setInfos.findIndex(info => info.name === infoObj.name)
  if (index < 0) state.setInfos.push(infoObj)
  else Vue.set(state.setInfos, index, infoObj)
}

export const subscribe = (state, item$) => {
  state.item$ = item$
}

export const fecthItemList = (state, rxItemListDoc) => {
  state.itemList = rxItemListDoc
  if (state.rxItems && state.itemList.value) state.ready = true
}

export const init = (state, rxItemColl) => {
  if (rxItemColl) state.rxItems = rxItemColl
}
