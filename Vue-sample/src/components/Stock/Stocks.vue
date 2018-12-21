<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Stock from './Stock';

  export default {
    name: "Stocks",
    computed: {
      ...mapGetters(['stocks'])
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style scoped>

</style>
