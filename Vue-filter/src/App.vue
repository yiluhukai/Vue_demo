<template>
  <div id="container">
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
           <h1 class="text-center">{{msg | toUpper |toLowCase}}</h1>
           <hr>
          <input type="text" v-model="filterText">
          <ul>
            <!--过滤器不能用在v-for指令中-->
            <li v-for="(fruite,index) in  filterFruites" style="display: block">#{{index+1}} {{fruite}}</li>
          </ul>
          <button @click="fruites.push('Ping')">Mixin的data不共享</button>
        </div>
    </div>
    <app-list></app-list>
  </div>
</template>

<script>
  import List from './List'
  import {FruiteMixin} from "./mixin";

  export default {
  name: 'app',
    mixins:[FruiteMixin],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },filters:{
    toLowCase(value){
      return value.toLowerCase()
    }
  },computed:{
    filterFruites(){
      return this.fruites.filter((element)=>{
        return element.match(this.filterText)
      })
    }
  },components:{
    appList:List
  },
    created(){
      console.log('App组件钩子被调用')
    }
}
</script>

<style>

</style>
