import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import * as am5 from '@amcharts/amcharts5';
// import * as am5xy from '@amcharts/amcharts5/xy';
// import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';


// Vue.use('am5',am5)
// Vue.use('am5xy',am5xy)
// Vue.use('am5themes_Animated',am5themes_Animated)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
