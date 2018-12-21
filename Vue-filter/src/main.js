import Vue from 'vue'
import App from './App.vue'

Vue.filter('toUpper',function (value) {
   return value.toUpperCase()
})
//全局mixin(所有的组件和Vue实例都会受影响)
Vue.mixin({
  created(){
    console.log('Global mixin')
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
