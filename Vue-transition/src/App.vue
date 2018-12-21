<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>CSS Animation</h1>
          <hr>
          <button class="btn btn-primary" @click="show=!show">Show Alert</button>
          <br><br>
          <transition name="fade">
              <div class="alert alert-info text-center" v-if="show">
                This  is some info!
              </div>
          </transition>
        <transition name="slide" type="animation">
          <div class="alert alert-info text-center" v-if="show">
            This  is some info!
          </div>
        </transition>

        <transition name="slide" type="animation" appear>
          <div class="alert alert-info text-center" v-if="show">
            This  is some info!
          </div>
        </transition>

        <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
          <div class="alert alert-info text-center" v-if="show">
            This  is some info!
          </div>
        </transition>
        <transition name="fade" mode="out-in">
          <div class="alert alert-info text-center" v-if="show" key="info">
            This  is some info!
          </div>
          <div class="alert alert-warning" v-else key="warning">
            This  is some warning!
          </div>
        </transition>


        <h1>JavaScript Animation</h1>
        <hr>
        <button class="btn btn-primary" @click="load=!load">Load/Remove Element</button>
        <br><br>
        <transition :class="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cannelled="enterCancelled"
                    @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled">
          <div style="width:300px;height:100px; background: lightgreen" v-if="load">
          </div>
        </transition>

        <h1>动态组件动画</h1>
        <hr>
        <button class="btn btn-primary" @click="switchComponent">Switch</button>
        <br><br>
        <transition name="fade" mode="out-in">
          <component :is="selectComponent"></component>
        </transition>

        <h1>列表动画</h1>
        <hr>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <hr>
        <ul class="list-group">
        <transition-group name="slide">
          <li class="list-group-item" v-for="(number,index) in numbers" @click="removeItem(index)"
              :key="number" style="cursor: pointer">{{number}}</li>
        </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import DangerAlert from './Component/DangerAlert'
  import SuccessAlert from './Component/SuccessAlert'
export default {
  name: 'app',
  data () {
    return {
      show:false,
      load:true,
      elementWidth:100,
      selectComponent:'appSuccessAlert',
      numbers:[1,2,3,4,5],
      nextNum:6
    }
  },
  methods:{
    beforeEnter: function (el) {
      console.log('beforEnter')
      this.elementWidth=100;
      el.style.width=this.elementWidth+'px';
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      // 元素的宽度过渡到300px
      console.log('Enter');
      let round=1;
      const interval=setInterval(()=>{
          el.style.width=(this.elementWidth+round*10)+'px';
          round++;
          if(round>20){
            clearInterval(interval);
            done()
          }
      },20)
    },
    afterEnter: function (el) {
      console.log('afterEnter')
    },
    enterCancelled: function (el) {
      console.log('enterCancelled')
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function (el) {
      console.log('beforEnter')
      this.elementWidth=300;
      el.style.width=this.elementWidth+'px';
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function (el, done) {
      console.log('Enter');
      let round=1;
      const interval=setInterval(()=>{
        el.style.width=(this.elementWidth-round*10)+'px';
        round++;
        if(round>20){
          clearInterval(interval);
          done()
        }
      },20)
    },
    afterLeave: function (el) {
      console.log('afterLeave')
    },
    //leaveCancelled 只用于 v-show 中
    leaveCancelled: function (el) {
      console.log('leaveCancelled');
    },
    switchComponent(){
        this.selectComponent=this.selectComponent=='appSuccessAlert'?'appDangerAlert':'appSuccessAlert'
    },
    addItem(){
        let pos=Math.floor(Math.random()*this.numbers.length)
        this.numbers.splice(pos,0,this.nextNum++)
    },
    removeItem(index){
        this.numbers.splice(index,1);
    }
  },components:{
      appDangerAlert:DangerAlert,
      appSuccessAlert:SuccessAlert
  }
}
</script>

<style scoped>

     /*使用过度*/
    .fade-enter{
      opacity: 0;
    }
    .fade-enter-active{
      /*不能设置opacity: 1;*/
       transition: opacity 1s;
    }
    .fade-leave{
      /*opacity: 1;*/
    }
   .fade-leave-active{
      opacity: 0;
      transition: opacity 1s;

    }
    /*使用动画和过渡,使用type来设置整个过程的时间*/
    .slide-enter{
       opacity: 0;
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }
    .slide-leave{

    }
    .slide-move{
      transition:transform 1s
    }
    .slide-leave-active{
         animation: slide-out 1s ease-out forwards;
         transition: opacity 1s;
         opacity: 1;
         position: absolute;
    }
    /*定义动画帧*/
    @keyframes slide-in{
      from{
       transform: translateY(20px);
     }
      to{
        transform: translateY(0);
      }
    }
     @keyframes slide-out{
       from{
         transform:translateY(0)
       }
       to{
         transform: translateY(20px);
       }
     }
</style>
