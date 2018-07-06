import { get } from '../rxdb/rxdb'

export const init = ({ commit }) => {
  get().then(rxdb => {
    commit('init', rxdb)
  })
}
