import {_get, _alert} from '../../util/common'

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
