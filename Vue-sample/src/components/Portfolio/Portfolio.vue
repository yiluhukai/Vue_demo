<template>
  <div class="row">
    <app-stock v-for="stock in stockPortfolio"  :stock="stock"></app-stock>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Stock from './Stock'
  export default {
    name: "Portfolio",
    components:{
      appStock:Stock
    },
    computed:{
      ...mapGetters(['stockPortfolio'])
    }
  }
</script>

<style scoped>

</style>
