/*
export const someMutation = (state) => {}
 */
import _d from 'lodash'

export const setRecs = (state, payload) => {
  state.recs = payload
}

export const setIsLoading = (state, payload) => {
  state.isLoading = payload
}

export const setSelected = (state, payload) => {
  state.selected = payload
}

export const setEditingRec = (state, payload) => {
  state.editingRec = payload
  state.backupRec = _d.clone(payload)
  state.isModalOpened = true
}

export const discardEditingRec = state => {
  // state.editingRec = {}
  _d.extend(state.editingRec, state.backupRec)
  state.isModalOpened = false
}

export const setIsModalOpened = (state, payload) => {
  state.isModalOpened = payload
}
