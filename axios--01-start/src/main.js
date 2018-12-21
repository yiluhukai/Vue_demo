import Vue from 'vue'
import App from './App.vue'



import axios from 'axios'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)


// router.beforeEach((to, from, next) => {
//     iView.LoadingBar.start();
//     next();
// });
//
// router.afterEach(route => {
//     iView.LoadingBar.finish();
// });
axios.defaults.baseURL = 'https://vue-axios-fecf0.firebaseio.com/';
// axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";
//设置拦截器
const requestInterceptor = axios.interceptors.request.use(function (config) {
    console.log('request interceptor')
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor
const responseInterceptor = axios.interceptors.response.use(function (response) {
    console.log('response interceptor')
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
//取消拦截器
axios.interceptors.request.eject(requestInterceptor)
axios.interceptors.response.eject(responseInterceptor)
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
