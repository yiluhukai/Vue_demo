import Vue from 'vue'
import Vuex from 'vuex'
import customAxios from './axios-auth'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        userId: null,
        user: null,
        timeout: null,
        loading:false
    },
    mutations: {
        authUser(state, authData) {
            state.userId = authData.userId;
            state.token = authData.token;
        },
        storeUser(state, user) {
            state.user = user;
        },
        clearAuthData(state) {
            state.userId = null;
            state.token = null;
        },
        changeLoading(state,value){
            state.loading=value
        }
    },
    actions: {
        timeOut({commit, state}, time) {
            //token过去后自动注销
            state.timeout = setTimeout(() => {
                //退出登录
                commit('clearAuthData');

            }, time * 1000)
        },
        logout({commit, state}) {
            //注销计时器
            clearTimeout(state.timeout)
            commit('clearAuthData');
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('expiresDate')
            router.push('/signin')
        },
        storeUser({commit, state}, formdata) {
            if (!state.token) {
                return
            }
            axios.post('users.json?auth=' + state.token, formdata).then(
                (res) => {
                    console.log(res)
                },
                (err) => {
                    console.log(err.message)
                }
            )
        }
        ,
        signUp({commit, dispatch}, formData) {
            const authData = {
                email: formData.email,
                password: formData.password,
                returnSecureToken: true
            }
            //发送消息到anthencition数据库
            customAxios.post(`signupNewUser?key=AIzaSyAcMFEoh7igM1wl6SZcK_Lsl5yaVoFi8mo`, authData).then(
                (response) => {
                    console.log(response)
                    commit('authUser', {token: response.data.idToken, userId: response.data.localId})
                    //将token保存在localStorage中
                    localStorage.setItem('token', response.data.idToken)
                    localStorage.setItem('userId', response.data.localId)
                    let expiresDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                    localStorage.setItem('expiresDate', expiresDate)
                    //将用户数据保存到users数据库
                    dispatch('storeUser', formData);
                    dispatch('timeOut', response.data.expiresIn)
                },
                (err) => {
                    console.log(err.message)
                }
            )
        },
        login({commit, dispatch}, formData) {
            const authData = {
                email: formData.email,
                password: formData.password,
                returnSecureToken: true
            }
            customAxios.post('verifyPassword?key=AIzaSyAcMFEoh7igM1wl6SZcK_Lsl5yaVoFi8mo', authData).then(
                (response) => {
                    console.log(response)
                    commit('authUser', {token: response.data.idToken, userId: response.data.localId});
                    //将token保存在localStorage中
                    localStorage.setItem('token', response.data.idToken)
                    localStorage.setItem('userId', response.data.localId)
                    let expiresDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                    localStorage.setItem('expiresDate', expiresDate)
                    dispatch('timeOut', response.data.expiresIn)
                },
                (err) => {
                    console.log(err.message)
                }
            )
        },
        fetchData({commit, state}) {
            if (!state.token) {
                return
            }
            axios.get('users.json?auth=' + state.token).then(
                (res) => {
                    console.log(res)
                    const users = [];
                    const data = res.data;
                    for (let key in data) {
                        let user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    console.log(users)
                    commit('storeUser', users[0]);
                }, (err) => {
                    console.log(err.message)
                }
            )
        }
        , tryAutoLogin({commit}) {
            const token = localStorage.getItem('token')
            if (!token) {
                return
            }
            if (new Date() > localStorage.getItem('expiresDate')) {
                return
            }
            commit('authUser', {token, userId: localStorage.getItem('userId')})
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        isAuthenticate(state) {
            return state.token !== null
        },
        loading(state){
            return state.loading
        }
    }
})