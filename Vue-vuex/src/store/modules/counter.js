//把counter有关的东西（state、getters、mutations、actions）组织组织在该文件里

const state={
  counter:0
}

const getters={
  doubleCounter(state){
    return state.counter*2;
  },
  stringClicks(state){
    return state.counter+ "Clicks";
  },
}

const mutations={
  //不能执行异步操作
  increment(state){
    state.counter++;
  },
  decrement(state){
    state.counter--;
  },
}

const actions={
  asyncIncrement(context,payload){
    setTimeout(()=>{
      //context类似于store,提交mutions
      context.commit('increment')
    },payload.delay)
  },
}
export  default {
  state,
  getters,
  mutations,
  actions
}
