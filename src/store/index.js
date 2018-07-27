import Vue from 'vue'
import Vuex from 'vuex'

import product from './product'
import supplier from './supplier'
import client from './client'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    supplier,
    client,
    user,
  },
})

export default store
