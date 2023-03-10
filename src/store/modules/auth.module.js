import axios from 'axios'
const TOKEN_KEY = 'jwt-token'
import {errors} from '../../router/errors.js'

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY)
    }
  },
  getters:{
    token(state){
      return state.token
    },
    isAuthenticated(_, getters){
      return !!getters.token
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem(TOKEN_KEY, token)


      // axios.post('google.com').then(res => {
      //   console.log(res)
      // }).catch(e => {
      //   console.log(e.response.status)
      // })
    },
    logout(state){
      state.token = null
      localStorage.removeItem(TOKEN_KEY)
    },
  },
  actions:{
    async login({commit, dispatch}, payload){
      
    try {
      const {data} = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`,
      {...payload, returnSecureToken:true})
      console.log(data)
      commit('setToken',data.idToken)
    }
    catch (e) {
      dispatch('setMessage', {
        value : errors[e.response.data.error.message] 
      }, {root: true})
      console.log(e.response.data.error.message)
    }
    }
  },
}
