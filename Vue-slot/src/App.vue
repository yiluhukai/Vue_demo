<template>
  <div class="container">
      <div class="row">
        <div class="col-xs-12">
            <!--<app-quote>-->
              <!--<h2 slot="title">The Quote</h2>-->
              <!--<p slot="content">{{content}}</p>-->
            <!--</app-quote>-->
            <button @click="selectComponent='appQuote'">appQuote</button>
            <button @click="selectComponent='appAuther'">appAuther</button>
            <button @click="selectComponent='appNew'">appNew</button>
            <p>{{selectComponent}}</p>
          <hr>
          <keep-alive>
            <component :is="selectComponent">
              <h2 slot="title">The Quote</h2>
              <p slot="content">{{content}}</p>
            </component>
          </keep-alive>
        </div>
      </div>
  </div>
</template>

<script>
  import Quote from './components/Quote';
  import Auther from './components/Auther'
  import New from './components/New'
export default {
    data(){
      return {
        content:'A wonderful Quote!',
        selectComponent:'appQuote'
      }
    },
  components:{
    appQuote:Quote,
    appAuther:Auther,
    appNew:New
  }
}
</script>

<style>
</style>
