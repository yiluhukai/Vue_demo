import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter);
const router=new VueRouter({
  mode:'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    //返回之前的位置
    if(savedPosition)
      return savedPosition;
    //返回之前锚链接的位置
    if(to.hash)
      return {
       //返回到页面原来中退出时的位置
       selector:to.hash
      }
      //返回的首部
      return {x:0,y:0}
  }
});
router.beforeEach((to, from, next) => {
  console.log('global beforeEach')
  next()
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});


