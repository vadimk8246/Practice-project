<template>
  <div class="error" v-if="message">
    <h3 class="error-text" >{{ message.value }}</h3>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  
  setup() {
    const store = useStore()


    const message = computed(() => (store.state.message))

  
    return {
      message
    }
  }
  
}

</script>