<template>
  <div class="home-auth">
    <router-view></router-view>
    <egor></egor>
  </div>
</template>

<script>
import egor from '../components/egor.vue'

export default {
components: {egor}
}
</script>