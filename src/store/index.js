import Vue from 'vue'
import Vuex from 'vuex'

import product from './product'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
  },
})

export default store
