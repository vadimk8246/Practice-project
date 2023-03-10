import axios from 'axios'
import router from '../../router/router.js'
import {errors} from '../../router/errors.js'

export default {
  namespaced: true,
  state() {
    return {
      
    }
  },
  getters:{
  },
  mutations: {
    test(payload) {
      console.log(payload)
    }
  },
  actions:{
    async register({dispatch}, payload) {
      try {
        const {status} = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_KEY}`, {...payload, returnSecureToken:true})
        if (status == 200) {
          router.push("/auth")
        }
      }
      catch(e) {
        dispatch('setMessage', {value : errors[e.response.data.error.message]}, {root: true})
        console.log(errors[e.response.data.error.message])
      }
    }
  },
}
