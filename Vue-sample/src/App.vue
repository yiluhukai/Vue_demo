<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <transition name="slide" mode="out-in" appear>
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  export default {
    name: 'app',
    components:{
      appHeader:Header
    },
    created(){
      this.$store.dispatch('initStocks')
    }
  }
</script>

<style>
    body{
      padding-top: 30px;
    }
    .slide-enter-active{
        animation: slide-in 500ms ease-out forwards;
    }
    .slide-leave-active{
        animation: slide-out 500ms ease-out forwards;
    }
    @keyframes slide-in{
      from{
        opacity: 0;
        transform: translateY(-30px);
      }
      to{
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes slide-out{
      from{
        opacity: 1;
        transform: translateY(0);
      }

      to{
       opacity: 0;
       transform: translateY(-30px);
      }
    }

</style>
