import { get } from '../rxdb/rxdb'

export const init = ({ state, commit }) => {
  if (!state.rxdb) {
    get().then(rxdb => {
      commit('init', rxdb)
    })
  }
}
