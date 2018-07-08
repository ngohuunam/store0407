import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'
import image from './image'
import item from './item'
import card from './card'

const state = {
  ready: false,
  rxdb: null,
  xs: true,
}

const store = new Vuex.Store({
  modules: { image, item, card },
  state,
  mutations,
  getters,
  actions,
})

if (module.hot) {
  module.hot.accept(['./card', './item', './image', './mutations', './getters', './actions'], () => {
    const newModuleImage = require('./image').default
    const newModuleItem = require('./item').default
    const newModuleCard = require('./card').default
    store.hotUpdate({
      mutations: require('./mutations').default,
      getters: require('./getters').default,
      actions: require('./actions').default,
      modules: { newModuleImage, newModuleItem, newModuleCard },
    })
  })
}

export default store
