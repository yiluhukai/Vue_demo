import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
import * as actions from './actions'

export default new Vuex.Store({
  actions,
  modules: {
    stocks,
    portfolio
  }
})
