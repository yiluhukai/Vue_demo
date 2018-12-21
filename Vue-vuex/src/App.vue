<template>
  <div class="container">
    <div class="row">
       <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Vuex</h1>
            <app-counter></app-counter>
            <br><br>
            <app-another-counter></app-another-counter>
            <hr>
            <app-result></app-result>
            <hr>
            <app-another-result></app-another-result>
            <hr>
            <h1>双向绑定</h1>
            <p>Value is :{{value}}</p>
            <input type="text" v-model="value">
       </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter'
  import Result from './components/Result'
  import AnotherResult from './components/AnotherResult'
  import AnotherCounter from './components/AnotherCounter'
export default {
  name: 'app',
  computed:{
    // value(){
    //   return this.$store.getters.value;
    // }
     value:{
       set:function (value) {
         //使用action更新state
         this.$store.dispatch('updateValueAction',value);
       },
       get:function () {

         return this.$store.getters.value;
       }
     }
  },
  components:{
    appCounter:Counter,
    appResult:Result,
    appAnotherResult:AnotherResult,
    appAnotherCounter:AnotherCounter
  }
}
</script>

<style>

</style>
