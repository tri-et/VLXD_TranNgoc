import { _get, _post, _alert } from '../../util/common'
import _d from 'lodash'

export const fetchRecs = ({ commit, getters }) => {
  commit('setIsLoading', true)
  _get(`{
    listStockIn {
      id
      productId
      supplierId
      price
      quantity
      productName
      supplierName
    }
  }`)
    .then(({ data }) => {
      if (!getters.getIsSuccess) {
        _alert('Success', 'positive')
      }
      commit('setRecs', data.listStockIn)
      commit('setIsLoading', false)
      commit('setIsSuccess', false)
    })
    .catch(err => {
      console.log(err)
      _alert(`Code: ${err.response.status} - ${err.response.statusText}`, 'negative')
      commit('setIsLoading', false)
    })
}

export const deleteRecs = ({ commit, getters }) => {
  commit('setIsLoading', true)
  let ids = Array.from(getters.getSelected, stockin => stockin.id)
  _post(
    ids,
    `mutation ($input: [Int]) {
      deleteStockIn(input: $input)
    }`
  )
    .then(({ data }) => {
      _alert(`Đã xóa sản phẩm`, 'info')
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
      _alert(`Code: ${err.response.status} - ${err.response.statusText}`, 'negative')
      commit('setIsLoading', false)
    })
}

export const updateRec = ({ commit, getters }) => {
  commit('setIsLoading', true)
  _post(
    _d.omit(getters.getEditingRec, ['__index']), // remove __index to match ProductInput definition
    `mutation ($input: StockinInput) {
      updateStockIn(input: $input) {
        id
        productId
        supplierId
        price
        quantity
      }
    }`
  )
    .then(({ data }) => {
      _alert(`Đã cập nhật nhập kho`, 'positive')
      commit('setIsLoading', false)
      commit('setIsModalOpened', false)
      commit('setIsSuccess', true)
      fetchRecs({ commit, getters })
    })
    .catch(err => {
      _alert(`Code: ${err.response.status} - ${err.response.statusText}`, 'negative')
      commit('setIsLoading', false)
    })
}
