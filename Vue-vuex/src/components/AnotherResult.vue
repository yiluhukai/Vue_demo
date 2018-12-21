<template>
  <div>
    <!--<p>Counter is:{{counter}}</p>-->
    <!--<p>Clicks:{{stringCounter}}</p>-->
    <p>Counter is:{{doubleCounter}}</p>
    <p>Clicks:{{stringClicks}}</p>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "AmotherCounter",

        // computed:{
        //   counter(){
        //     //return this.$store.state.counter*2
        //     return this.$store.getters.doubleCounter;
        //   },
        //   stringCounter(){
        //     return this.$store.getters.stringClicks;
        //   }
        // }
      //将store.js中计算属性映射成组件的计算属性
        computed:{
          // 使用对象展开运算符将 getter 混入 computed 对象中
          ...mapGetters([
            'doubleCounter',
            'stringClicks',
            // ...
          ])
          //定义自己的计算属性
        }
    }
</script>

<style scoped>

</style>
