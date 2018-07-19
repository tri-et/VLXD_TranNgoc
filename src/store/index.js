import Vue from 'vue'
import Vuex from 'vuex'

import product from './product'
import supplier from './supplier'
import stockin from './stockin'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    supplier,
    stockin,
  },
})

export default store
