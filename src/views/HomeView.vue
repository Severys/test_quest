<template>
  <div class="home">
    <VAuthorization />
  </div>
</template>

<script>
import VAuthorization from '@/components/v-authorization.vue'

export default {
  name: 'HomeView',
  components: {
    VAuthorization
  }
}
</script>
