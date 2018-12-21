<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr>
        <!--<app-header></app-header>-->
        <router-view name="top-header"></router-view>
        <transition name="fadeSlide" mode="out-in" appear>
          <router-view></router-view>
        </transition>
        <router-view name="bottom-header"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  export default {
    components:{
      appHeader:Header
    }
  }
</script>

<style scoped>
  .fadeSlide-enter{
    opacity: 0;
  }
  .fadeSlide-enter-active{
    transition: opacity 1s;
    animation: slide-in 1s ease-out forwards;
  }
  .fadeSlide-leave{
    /*opacity: 1;*/
  }
  .fadeSlide-leave-active{
    transition: opacity 1s;
    animation: slide-out 1s ease-out forwards;
    opacity: 0;
  }
  @keyframes slide-in{
    from{
      transform: translateX(20px);
    }
    to{
      transform: translateX(0);
    }
  }
  @keyframes slide-out{
    from{
      transform: translateX(0);
    }
    to{
      transform: translateX(20px);
    }
  }
</style>
