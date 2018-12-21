<template>
  <div class="container">
      <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>全局指令</h1>
             <h1 v-highlight="'blue'">Hello World!</h1>
             <h1 v-highlight:background.delayed="'blue'">Hello World!</h1>
            <hr>
            <h1>局部指令</h1>
            <h1 v-local-highlight="'blue'">Hello World!</h1>
            <h1 v-local-highlight:background.delayed.blink="{mainColor:'red',second:'green',delay:'1000'}">Hello World!</h1>
            <button v-custom-on:click="alertMe" class="btn btn-primary">alertMe</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  //注册局部指令
  //v-local-highlight:[background][.delayed][.blink]="string|object"
  //当使用.blink(渐变)修饰符时必须设置为对象.
  //.delay是延迟设置颜色
  //设置background是设置元素的背景色，否则是设置元素的前景色
  directives:{
    'local-highlight':{
      bind(el,binding,vnode) {
        let delay=0;
        if(binding.modifiers['delayed']){
          delay=3000;
        }
        if(binding.modifiers['blink'] && (typeof binding.value)=='object'){
          setTimeout(()=>{
            let mainColor=binding.value.mainColor;let secondColor=binding.value.secondColor;
            let currentColor=mainColor;
            setInterval(()=>{
              currentColor=currentColor==mainColor?currentColor=secondColor:currentColor=mainColor;
              if (binding.arg == 'background')
                el.style.backgroundColor =currentColor
              else
                el.style.color = currentColor
            },binding.value.delay)
          },delay)
        }else{
          setTimeout(()=>{
            if (binding.arg == 'background')
              el.style.backgroundColor = binding.value;
            else
              el.style.color = binding.value;
          },delay)
        }
      }
    },
    'customOn':{
      //模拟v-on指令
      bind(el,binding,vnode){
         let type=binding.arg;
         let Fn=binding.value;
         el.addEventListener(type,Fn);
      }
    }
  },methods: {
    alertMe(event){
      alert('I am clicked')
    }
  }
}
</script>

<style>

</style>
