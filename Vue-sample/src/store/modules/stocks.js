import stocks from './../../data/stocks'

const state = {
  stocks: []
}
const getters = {
  stocks(state){
    return state.stocks
  }
}
const mutations = {
  'SET_STOCK'(state, stocks) {
    state.stocks = stocks
  },
  'RED_STOCK'(state) {
    state.stocks.forEach((element)=>element.price=Math.round((Math.random()+0.5)*element.price))
  }
}

const actions = {
  //初始化stocks
  initStocks({commit}) {
    commit('SET_STOCK', stocks)
  },
  //购买股票
  buyStock({commit}, order) {
      commit('BUY_STOCK',order)
  },
  randomizeStocks({commit}) {
    commit('RED_STOCK')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

