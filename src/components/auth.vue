<template>
  <div class="form-wrapper">
    <form class="form-control" @submit.prevent="log">
      <h2 class="form-title">Авторизация</h2>
      <input type="email" class="input input-email" placeholder="Email" v-model="email">
      <input type="password" class="input input-password" placeholder="Give me your pASSword" v-model="password">
      <button class="btn form-button">Войти</button>
      <router-link to="/register" class="router-link"><span class="form-auth-alr">Создать аккаунт</span></router-link>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'


export default{
  setup() {
    const router = useRouter()
    const store = useStore()
    const email = ref('')
    const password = ref('')


    const log = async () => {
      await store.dispatch('auth/login',{
        email:email.value,
        password:password.value
      })
      router.push('/')
    }
    return {
      email,
      password,
      log
    }
  }

}

</script>