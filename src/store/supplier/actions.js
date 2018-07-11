import {_get, _post, _alert} from '../../util/common'
import _d from 'lodash'

export const fetchRecs = ({commit}) => {
  commit('setIsLoading', true)
  _get(`{
    listSupplier {
      id
      name
      taxcode
      address
      phone
    }
  }`)
    .then(({data}) => {
      _alert('Success', 'positive')
      commit('setRecs', data.listSupplier)
      commit('setIsLoading', false)
    })
    .catch(err => {
      console.log(err)
      _alert(`Code: ${err.response.status} - ${err.response.statusText}`, 'negative')
      commit('setIsLoading', false)
    })
}

export const deleteRecs = ({commit, getters}) => {
  commit('setIsLoading', true)
  let ids = Array.from(getters.getSelected, supplier => supplier.id)
  _post(
    ids,
    `mutation ($input: [Int]) {
      deleteSupplier(input: $input)
    }`
  )
    .then(({data}) => {
      _alert(`Đã xóa ${data.deleteSupplier} sản phẩm`, 'info')
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

export const updateRec = ({commit, getters}) => {
  commit('setIsLoading', true)
  _post(
    _d.omit(getters.getEditingRec, ['__index']), // remove __index to match ProductInput definition
    `mutation ($input: SupplierInput) {
      updateSupplier(input: $input) {
        id
        taxcode
        name
        address
        phone
      }
    }`
  )
    .then(({data}) => {
      _alert(`Đã cập nhật: ${data.updateSupplier.name}`, 'positive')
      commit('setIsLoading', false)
      commit('setIsModalOpened', false)
    })
    .catch(err => {
      _alert(`Code: ${err.response.status} - ${err.response.statusText}`, 'negative')
      commit('setIsLoading', false)
    })
}
