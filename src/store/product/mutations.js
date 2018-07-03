export const setRecs = (state, payload) => {
  state.recs = payload
}

export const setIsLoading = (state, payload) => {
  state.isLoading = payload
}

export const setSelected = (state, payload) => {
  state.selected = payload
}

export const setEditingRow = (state, payload) => {
  state.editingRow = payload
  state.isModalOpened = true
}

export const setIsModalOpened = (state, payload) => {
  state.isModalOpened = payload
}
