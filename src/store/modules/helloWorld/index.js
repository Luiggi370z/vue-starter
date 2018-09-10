import * as types from './mutation-types'
// For big state, mutations, actions or getters you
// can create each prop in a separated file

const state = {
  msg: ''
}

const mutations = {
  [types.UPDATE_MSG](state, payload) {
    state.msg = payload
  }
}

const actions = {
  updateMsg({ commit }, newMsg) {
    return commit(types.UPDATE_MSG, newMsg)
  }
}

const getters = {
  msg: state => state.msg
}

const helloWorldModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default helloWorldModule
