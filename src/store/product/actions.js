import {_get, _post, _procError, _procAlert} from '../../util/common'
import _d from 'lodash'

export const fetchRecs = ({commit}) => {
  commit('setIsLoading', true)
  _get(`{
    listProduct {
      id
      name
      code
      unit
      listingPrice
    }
  }`)
    .then(({data}) => {
      _procAlert(data)
      commit('setRecs', data.listProduct)
      commit('setIsLoading', false)
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}

export const deleteRecs = ({commit, getters}) => {
  commit('setIsLoading', true)
  let ids = Array.from(getters.getSelected, product => product.id)
  _post(
    ids,
    `mutation ($input: [Int]) {
      deleteProduct(input: $input)
    }`
  )
    .then(({data}) => {
      _procAlert(data)
      commit('setIsLoading', false)

      // remove deleted recs from state.recs
      _d.remove(getters.getRecs, rec => {
        return ids.includes(rec.id)
      })
      // clear selection
      commit('setSelected', [])
      // reactive the grid with new recs
      commit('setRecs', _d.clone(getters.getRecs))
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}

export const updateRec = ({commit, getters}) => {
  commit('setIsLoading', true)
  _post(
    _d.omit(getters.getEditingRec, ['__index']), // remove __index to match ProductInput definition
    `mutation ($input: ProductInput) {
      updateProduct(input: $input) {
        id
        code
        name
        unit
        listingPrice
      }
    }`
  )
    .then(({data}) => {
      _procAlert(data)
      commit('setIsLoading', false)
      commit('setIsModalOpened', false)
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}
