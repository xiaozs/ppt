import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";

Vue.config.productionTip = false

// 通过Vue.prototype.$eventBus
// 给所有组件的$eventBus属性注入一个
// Vue对象
Vue.prototype.$eventBus = new Vue({
  data: {
    // 用于交流的数据
    value: 1
  }
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
