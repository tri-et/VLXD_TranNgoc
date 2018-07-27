import {_procAlert, _procError, _ax, _get, _post, _alert} from '../../util/common'
import _d from 'lodash'
import router from '../../router'

export const fetchRecs = ({commit}) => {
  commit('setIsLoading', true)
  _get(`{
    listUser {
      id
      username
      password
      roles
      createdAt
    }
  }`)
    .then(({data}) => {
      _procAlert(data)
      commit('setRecs', data.listUser)
      commit('setIsLoading', false)
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}
export const loginUser = ({commit}, payload) => {
  commit('setIsLoading', true)
  _post(
    payload,
    `mutation ($input: LoginInput) {
      login(input: $input)
    }`
  )
    .then(({data}) => {
      commit('setIsLoading', false)
      if (data.errors) _alert(data.errors[0].message, 'warning')
      else {
        // Login successfully
        localStorage.setItem('auth-token', data.login)
        commit('setToken', data.login)
        _ax.defaults.headers.common['Authorization'] = 'Bearer ' + data.login
        _alert(`Đăng Nhập Thành Công!`, 'positive')
        router.push('/')
      }
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}

export const deleteRecs = ({commit, getters}) => {
  commit('setIsLoading', true)
  let ids = Array.from(getters.getSelected, user => user.id)
  _post(
    ids,
    `mutation ($input: [Int]) {
      deleteUser(input: $input)
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
  // remove __index to match UserInput definition
  let user = _d.omit(getters.getEditingRec, ['__index'])
  if (user.id) {
    _post(
      _d.omit(user, ['password', 'createdAt']),
      `mutation ($input: UserInput) {
      updateUser(input: $input) {
        id
        username
        roles
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
  } else {
    _post(
      user, // remove __index to match UserInput definition
      `mutation ($input: UserInput) {
      createUser(input: $input) {
        username
        password
        roles
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
}
