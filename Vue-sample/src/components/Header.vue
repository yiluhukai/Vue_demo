<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link
            tag="li"
            to="/portfolio"
            active-class="active">
            <a>Portfolio</a>
          </router-link>
          <router-link
            tag="li"
            to="/stocks"
            active-class="active">
            <a>Stock</a>
          </router-link>
        </ul>
        <p class="navbar-text navbar-right">funds:{{funds | currency}}</p>
        <ul class="nav navbar-nav navbar-right">

          <li><a href="#" @click="endDay"> End Day</a></li>
          <li class="dropdown" :class="{open:toggle}" @click="toggle=!toggle">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
               aria-expanded="false">Save & Load<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save Data</a></li>
              <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Header",
    data() {
      return {
        toggle: false
      }
    },
    computed: {
      ...mapGetters(['funds'])
    },
    methods: {
      ...mapActions(['randomizeStocks','fetchData']),
      endDay() {
        //更新股票的价格
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          stocks:this.$store.getters.stocks,
          funds:this.$store.getters.funds,
          stockPortfolio:this.$store.getters.stockPortfolio
        }
        this.$http.put('data.json',data);
      },
      loadData(){
        this.fetchData();
      }
    }
  }
</script>

<style scoped>

</style>
