<template>
  <div class="home">
    <nav>
      <ul>
        <li><a href="">Главная</a></li>
        <li><a href="">Таблица</a></li>
        <li><router-link to="/auth" href="" @click="logout">Выйти</router-link ></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script> 
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const logout = () => {
      store.commit('auth/logout')
    }
    
    return {
      logout
    }
  }
}

</script>