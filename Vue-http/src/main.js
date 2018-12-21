import Vue from 'vue'
import App from './App.vue'
import VueResourse from 'vue-resource'
Vue.use(VueResourse)
//设置请求的根路径
Vue.http.options.root = 'https://vue-http-b0638.firebaseio.com/';
Vue.http.interceptors.push(function(request,next) {
 //拦截请求
  if(request.method=='POST')
  {
    request.method='PUT'
  }
  //拦截响应
  next((response)=>{
    //将返回的对象包装一下
    response.json=()=>({message:response.body})
  })
});
new Vue({
  el: '#app',
  render: h => h(App)
})
