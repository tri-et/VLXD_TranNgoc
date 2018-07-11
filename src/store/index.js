import Vue from 'vue'
import Vuex from 'vuex'

import product from './product'
import supplier from './supplier'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    supplier,
  },
})

export default store
