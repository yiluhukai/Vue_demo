import Vue from 'vue'
import App from './App.vue'
export let eventBus=new Vue({
    //可以在事件总线中实现一些代码，导入后在其他其地方使用。
    methods:{
      editAge(age){
        this.$emit("ageWasEdit",age)
      }
    }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
