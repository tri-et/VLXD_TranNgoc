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

// get auth token, to make sure all _get _post require got auth-token attached
let getToken = () => localStorage.getItem('auth-token')
let setToken = () => {
  let token = getToken()
  if (token) {
    _ax.defaults.headers.common['Authorization'] = 'Bearer ' + token
  } else {
    _ax.defaults.headers.common['Authorization'] = null
  }
}

const _get = query => {
  setToken()
  return _ax.get('/api', {
    params: {
      query: query,
    },
  })
}

const _post = (input, query) => {
  setToken()
  return _ax({
    method: 'post',
    url: '/api',
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify({query, variables: {input}}),
  })
}

const _alert = (message, type) => {
  Notify.create({
    message,
    type,
    timeout: 2000,
  })
}

export {_ax, _alert, _get, _post}
