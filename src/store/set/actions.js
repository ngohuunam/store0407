export const getSets = ({ state, commit, dispatch }, names) => {
  const rxSets = state.rxSets
  findAll(rxSets).then(rxSetDocs => {
    rxSetDocs.forEach(setDoc => {
      const info = setDoc.item.reduce(
        (res, item) => {
          const dot = item.indexOf('.')
          const minus = item.indexOf('-')
          const dash = item.indexOf('_')
          const plus = item.indexOf('+')
          const color = item.substring(dot + 1, minus)
          const hex = item.substring(minus + 1, dash)
          const size = item.substring(dash + 1, plus)
          if (res.size.indexOf(size) < 0) res.size.push(size)
          if (res.color.indexOf(color) < 0) res.color.push(color)
          if (res.hex.indexOf(hex) < 0) res.hex.push(hex)
          return res
        },
        { size: [], color: [], hex: [] },
      )
    })
  })
}

export const getSet = ({ state, commit, dispatch }, name) => {
  const rxSets = state.rxSets
  const checked = checkNames(state, [name])
  const notListed = checked.notListed
  if (notListed.length) {
    findOne(rxSets, notListed[0]).then(rxSetDoc => commit('pushSet', rxSetDoc))
  } else dispatch('notifyChecked', { checked: checked })
}

export const notifyChecked = ({ commit }, info) => {
  const checked = info.checked
  const type = info.type
  const listed = checked.listed
  const noExist = checked.noExist
  const exist = checked.exist
  if (listed.length) commit('notify', `${type && type['listed'] ? type['listed'] : 'e'} ${listed.join(', ')} already in list`, { root: true })
  if (noExist.length) commit('notify', `${type && type['noExist'] ? type['noExist'] : 'e'} ${noExist.join(', ')} not existed`, { root: true })
  if (exist.length) commit('notify', `${type && type['exist'] ? type['exist'] : 'e'} ${exist.join(', ')} existed`, { root: true })
}

export const init = ({ commit, rootState }) => {
  const rxdb = rootState.rxdb
  if (rxdb) {
    commit('init', rxdb.set)
    rxdb.list
      .findOne('set')
      .exec()
      .then(rxSetListDoc => {
        // console.log(rxSetListDoc)
        if (rxSetListDoc) {
          commit('fecthSetList', rxSetListDoc)
        }
      })
  }
}

const checkNames = (state, names) => {
  const res = { listed: [], notListed: [], noExist: [], exist: [] }
  names.map(name => {
    if (state.setListed.indexOf(name) > -1) {
      res.listed.push(name)
      res.exist.push(name)
    } else if (state.setList.value.indexOf(name) > -1) {
      res.notListed.push(name)
      res.exist.push(name)
    } else res.noExist.push(name)
  })
  // console.log(res)
  return res
}

const findOne = (rxSets, name) => {
  return new Promise(resolve =>
    rxSets
      .findOne(name)
      .exec()
      .then(rxDoc => resolve(rxDoc)),
  )
}

const findMany = (rxSets, names) => {
  return new Promise(resolve =>
    rxSets
      .find()
      .where('name')
      .in(names)
      .exec()
      .then(rxDocs => resolve(rxDocs)),
  )
}

const findAll = rxSets => {
  return new Promise(resolve =>
    rxSets
      .find()
      .exec()
      .then(rxDocs => resolve(rxDocs)),
  )
}
