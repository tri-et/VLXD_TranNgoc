import Vue from 'vue'
import Vuex from 'vuex'

import product from './product'
import supplier from './supplier'
import client from './client'
import user from './user'
import stockin from './stockin'
import stock from './stock'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    supplier,
    client,
    user,
    stockin,
    stock,
  },
})

export default store
