export const sum = state => setName => {
  const set = state.sets.find(set => set.name === setName)
  const info = set.info
  const T = info.type || 'X'
  const G = info.gene || 'X'
  const L = info.len || 'X'
  const F = info.fabric || 'X'
  const D = info.design.join(', ') || 'X'
  return `${T} | ${G} | ${L} | ${F} | ${D} |`
}

export const info = state => setName => {
  const set = state.sets.find(set => set.name === setName)
  return set.info
}

export const itemList = state => setName => {
  const set = state.sets.find(set => set.name === setName)
  return set.item
}

export const hasItem = state => setName => {
  const hasItem = state.sets.find(set => set.name === setName)
  return hasItem.item.length > 0
}

export const hasImage = state => setName => {
  const hasItem = state.sets.find(set => set.name === setName)
  return hasItem.image.length > 0
}
