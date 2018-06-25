import {_get, _alert} from '../../util/common'

export const fetchRecs = ({commit}) => {
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
    })
    .catch(err => {
      _alert(err, 'negative')
    })
}
