<template>
  <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1 class="text-center">The Super Quiz</h1>
        </div>
      </div>
      <hr>
      <div class="row">
       <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
         <transition name="flip" mode="out-in" appear>
           <component :is="selectComponent" @answered='switchComponent($event)' @confirmed="selectComponent='appQuestion'"></component>
         </transition>
       </div>
      </div>
  </div>
</template>

<script>
  import Answer from './Components/Answer'
  import Question from './Components/Question'
export default {
  name: 'app',
  data () {
    return {
      selectComponent:"appQuestion",
    }
  },components:{
    appAnswer:Answer,
    appQuestion:Question
  },methods:{
    switchComponent(value){
      if(value){
        this.selectComponent="appAnswer";
      }else{
        this.selectComponent="appQuestion";
        alert('answer is worong!,please input next time');
      }
    }
  }
}
</script>

<style scoped>
      .flip-enter{
        
      }
      .flip-enter-active{
          animation: flip-in 1s ease-out forwards;
      }
       .flip-leave{
         
       }
      .flip-leave-active{
        animation: flip-out 1s ease-out forwards;
      }
      @keyframes flip-out{
        from{
          transform: rotateY(0deg);
        }
        to{
          transform: rotateY(90deg);
        }
      }
      @keyframes flip-in{
        from{
          transform: rotateY(90deg);
        }
        to{
          transform: rotateY(0deg);
        }
      }
</style>
