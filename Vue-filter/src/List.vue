<template>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <input type="text" v-model="filterText">
        <ul>
          <!--过滤器不能用在v-for指令中-->
          <li v-for="(fruite,index) in  filterFruites" style="display: block">#{{index+1}} {{fruite}}</li>
        </ul>
      </div>
    </div>
</template>
<script>
  import {FruiteMixin} from "./mixin";
  export default {
    name: 'app',
    mixins:[FruiteMixin]
    ,created(){
      console.log('List组件钩子被调用')
    }
  }
</script>

<style>

</style>
