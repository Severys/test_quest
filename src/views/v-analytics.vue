<template>
  <div class="about">
    <h1>Аналитика</h1>
    <h2>Аналитика по визитам</h2>
    <VGraph/>
  </div>
</template>

<script>
import VGraph from '@/components/v-graph.vue'

export default {
	name: 'VAnalytics',
  components: {
    VGraph
  }
}
</script>

<style lang="scss" scope>
.graph {
  width: 100%;
  height: 500px;
}
 h2 {
  text-align: start;
  font-size: 20px;
  margin-top: 30px;
 }
</style>

