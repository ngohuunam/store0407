import Vue from 'vue'

export const pushSetInfo = (state, infoObj) => {
  const index = state.setInfos.findIndex(info => info.name === infoObj.name)
  if (index < 0) state.setInfos.push(infoObj)
  else Vue.set(state.setInfos, index, infoObj)
}

export const fecthItemList = (state, rxItemListDoc) => {
  state.itemList = rxItemListDoc
  if (state.rxItems && state.itemList.value) state.ready = true
}

export const init = (state, rxItemColl) => {
  if (rxItemColl) state.rxItems = rxItemColl
}
