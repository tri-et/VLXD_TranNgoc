import axios from 'axios'
import {Notify} from 'quasar'

const _ax = axios.create({
  timeout: 20000,
  // remove the abundant "data" key from grahql response
  transformResponse: axios.defaults.transformResponse.concat(data => {
    if (Object.keys(data).length === 1) return data.data
    else return data // keep all data properties
  }),
})

const _get = query =>
  _ax.get('/api', {
    params: {
      query: query,
    },
  })

const _post = (input, query) =>
  _ax({
    method: 'post',
    url: '/api',
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify({query, variables: {input}}),
  })

const _alert = (message, type) => {
  Notify.create({
    message,
    type,
    timeout: 2000,
  })
}
export {_ax, _alert, _get, _post}
