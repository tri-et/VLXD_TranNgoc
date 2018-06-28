import {_get, _post, _alert} from '../../util/common'
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
      _alert('Success', 'positive')
      commit('setRecs', data.listProduct)
      commit('setIsLoading', false)
    })
    .catch(err => {
      _alert(err, 'negative')
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
      _alert(`Success, ${data.deleteProduct} is deleted!`, 'positive')
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
      _alert(err, 'negative')
      commit('setIsLoading', false)
    })
}
