const state = {
  funds: 10000,
  stocks: []
};

const getters = {
  stockPortfolio(state,getters,rootState,rootGetters){
      // console.log(getters==rootGetters)
      // console.log(rootGetters)
      //需要从stocks中获取全stock.name
      return state.stocks.map((stock)=>{
        const record=getters.stocks.find((element)=>element.id=stock.id)
        return {
          id:stock.id,
          name:record.name,
          price:record.price,
          quantity: stock.quantity
        }
      })
  },
  funds(state){
    return state.funds
  }
};
const mutations = {
  "BUY_STOCK"(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find((element) => element.id == stockId);
    if (record) {
      //已经购买的股票
      record.quantity += quantity;

    } else {
      //第一次购买这种股票
      state.stocks.push({
        id: stockId,
        quantity,
      });
    }
    state.funds-=quantity*stockPrice
  },
  "SELL_STOCK"(state,{stockId,quantity,stockPrice}){
    //找到对应的股票
    const record = state.stocks.find((element) => element.id == stockId);
    if(record.quantity>quantity){
      record.quantity-=quantity
    }else{
      state.stocks.splice(state.stocks.indexOf(record),1)
    }
    state.funds+=quantity*stockPrice
  },
  "SET_PORTFOLIO"(state,{stocks,funds}){
    state.funds=funds;
    state.stocks=stocks?stocks:[];
  }
};
const actions = {
    sellStock({commit},order){
      commit('SELL_STOCK',order);
    }
};
export default {
  state,
  getters,
  mutations,
  actions
}

