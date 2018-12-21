import Vue from 'vue'
import Vuex from 'vuex'

import counter from './modules/counter.js'

import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    value: 100
  },
  getters: {
    value(state) {
      return state.value;
    }
  },
  mutations: {
    updateValue(state, payload) {
      state.value = payload;
    }
  },
  // actions:{
  //    updateValueAction({commit},payload){
  //         commit('updateValue',payload)
  //    }
  // }
  actions,
  modules: {
    counter
  }
})
