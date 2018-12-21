import Vue from 'vue';

export const fetchData = ({commit}) => {
  Vue.http.get('data.json').then((response) => {
    const data = response.body;
    if(data){
      const stocks = data.stocks
      commit('SET_STOCK', stocks)
      const portfolio = {
        stocks: data.stockPortfolio,
        funds: data.funds
      }
      commit('SET_PORTFOLIO',portfolio)
    }
  })
}

