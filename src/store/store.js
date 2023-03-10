import { createStore } from 'vuex'
import auth from './modules/auth.module.js'
import register from './modules/register.module.js'
// import errorMessage from './modules/errorMessage.module.js'

export default createStore({
  namespaced: true,
  state() {
    return {
      message: null
    }
  },
  getters:{
  },
  mutations: {
    setMessage(state, message) {
      state.message = message
      console.log(state.message.value)
    },
    clearMessage(state) {
      state.message = null
    }
  },
  actions:{
    setMessage({commit}, message) {
      commit('setMessage', message)
      setTimeout(() => {
        commit('clearMessage')
      }, 3000)
    }
  },
  modules: {
    auth,
    register
    // errorMessage
  }
})
