<template>
  <div class="form-wrapper">
    <form class="form-control" @submit.prevent="checkPassword">
      <h2 class="form-title">Регистрация</h2>
      <input type="email" class="input input-email" placeholder="Email" v-model="email">
      <input 
        type="password" 
        class="input input-password" 
        placeholder="Give me your pASSword" 
        v-model="password">
      <input 
        type="password" 
        class="input input-password" 
        placeholder="Ещё раз pASSword" 
        v-model="confirmPassword">
      <button class="btn form-button" :disabled="password.length < 6 || confirmPassword.length < 6 || email.length < 1">Регистрация</button>
      <router-link to="/auth" class="router-link"><span class="form-auth-alr">Уже есть аккаунт</span></router-link>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
import {errors} from '../router/errors.js'


export default {
  setup() {
    const store = useStore()
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')

    const checkPassword = async () => {
      if (password.value === confirmPassword.value && password.value.length > 0) { 
        await store.dispatch('register/register',{
          email: email.value,
          password: password.value
        })
      }
      else if(password.value !== confirmPassword.value) {
        store.dispatch('setMessage', {value: errors.PASSWORD_NOT_CONFIRM })
    }
      // else if (password.value) {
      //   store.dispatch('setMessage', { value: errors.PASSWORD_EMPTY })
      // }
  }
    return {
      email,
      password,
      confirmPassword,
      checkPassword,
      errors
    }
  }
}

</script>