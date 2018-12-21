# Vue

## 1.Vue实例

```vue
  new Vue({
            el:"#app",
            data:{title:"hello,Vue!",
                  link:"http://www.baidu.com"
            },
            methods:{
                changeTitle:function (event) {
                    this.title=event.target.value;
                },
                sayHello(){
                    return "hello"
                }
            }
        })
```
接受一个对象作为参数,对象的el属性指定该实例的作用范围（模板），data属性执行了指定了模板中需要绑定的数据，methods中定义了一些方法，data中定义的属性可以在methods的方法中用this.属性去获取。这是因为创建Vue实例时参数中的这些属性和方法会成为Vue实例的属性和方法。

```vue
  <div id="app">
        <input type="text" v-on:input="changeTitle">
        <p>{{title}}</p>
        <h1>{{sayHello()}}</h1>
        <a v-bind:href="link">百度</a>
    </div>
```
可以通过{{}}（文本插值符号）带给元素绑定内容，{{}}中可以使用属性和方法(需要省略this).绑定事件需要使用v-on:事件="方法"指令，绑定属性使用v-bind:"属性"="值"。
### 1.1禁止多次渲染

```vue
    <div id="app">
        <p>{{title}}</p>
        <h1>{{sayHello()}}</h1>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{title:"hello,Vue!"
            },
            methods:{
                sayHello(){
                    this.title="hello";
                    return this.title;
                }
            }
        })
    </script>
```
```text
hello   p
hello   h1
```
元素的p的内容首先从data里面获取数据进行绑定，然后我们改变了this.title,所以绑定的值也发生了变化。我们可以使用v-once指令来禁止对此渲染。
```text
hello,Vue!
hello
```
### 1.2 经绑定的数据作为html解析

```vue
 <div id="app">
        <p>{{link}}</p>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{link:"<a href='www.baidu.com'>百度</a>"
            },

        })
    </script>
```
默认会作为文本解析
```text
<a href='www.baidu.com'>百度</a>
```
使用v-html指令可以使其作为html解析
```vue
  <div id="app">
        <p v-html="link"></p>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{link:"<a href='www.baidu.com'>百度</a>"
            },

        })
    </script>
```
```text
百度  <a>
```
### 1.3 监听事件
```vue
 <div id="app">
        <button v-on:click="increase">加一</button>
        <p>
            {{num}}
        </p>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                num:1
            },
            methods:{
                increase:function () {
                    this.num++;
                }
            }
        })
    </script>
```
```text
加一  <button>
1
```
点击按钮数字会每次增加1，使用v-on:click="methosname"来监听click事件。

### 1.4 获取事件对象

```vue
<div id="app">
        <p v-on:mousemove="update">
            鼠标的坐标：{{x}},{{y}}
        </p>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                x:0,
                y:0
            },
            methods:{
                update:function (event) {
                    this.x=event.clientX;
                    this.y=event.clientY;
                }
            }
        })
    </script>
```
event对象是原生的事件对象。可以给方法中同时传入事件对象和参数，事件对象需要使用$event表示。
```vue
 <div id="app">
       <button v-on:click="increase(2,$event)">增加</button>
        {{num}}
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
               num:0
            },
            methods:{
              increase:function (step,event) {
                  console.log(event.target)
                  this.num+=step;
              }
            }
        })
    </script>
```
点击增加按钮，数字每次增加2.
### 1.5 事件修饰符
原生dom中我们可以调用event的preventDefault()（通知浏览器不要执行与事件关联的默认动作）和stopPropagation()（不再派发事件）。
```vue
  <div id="app">
        <p v-on:mousemove="update">
            鼠标的坐标：{{x}},{{y}}
            <span v-on:mousemove="stop">Demo Stop</span>
        </p>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
               x:0, y:0
            },
            methods:{
                update:function (event) {
                    this.x=event.clientX;
                    this.y=event.clientY;
                },
                stop:function (event) {
                    event.stopPropagation()
                }
            }
        })
    </script>
```
Vue中提供了一些常见的事件修饰符stop、prevent来实现这些功能。
```vue
<div id="app">
        <p v-on:mousemove="update">
            鼠标的坐标：{{x}},{{y}}
            <span v-on:mousemove.stop>Demo Stop</span>
        </p>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
               x:0, y:0
            },
            methods:{
                update:function (event) {
                    this.x=event.clientX;
                    this.y=event.clientY;
                }
            }
        })
    </script>
```
### 1.6 按键修饰符

```vue
 <div id="app">
        <p>
            <input type="text" v-on:keyup.enter="AlertMe">
        </p>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
            },
            methods:{
                AlertMe:function(){
                    alert("hello")
                }
            }
        })
    </script>
```
我们希望我们输入完成后点击enter按钮在弹出对话框，我们可以使用按键修饰符来实现。

总结：想上面我们写的即有HTML又有javascript的代码就是模板，模板可以访问Vue实例，模板中任何能访问到Vue实例的地方都可以使用javascript表达式。

### 1.8 v-model实现双向数据绑定

```vue
  <div id="app">
        <p>
            <input type="text" v-model="name">
        </p>
        {{name}}
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                name:"yiluhuakai"
            }
        })
    </script>
```
使用v-model指令可以实现页面的数据到模型，也可以实现数据从模型出发到页面。可以用v-bind和v-on指令实现类似的效果。
```vue
 <div id="app">
        <p>
            <input type="text" v-bind:value="name" v-on:keyup="name=$event.target.value">
        </p>
        {{name}}
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                name:"yiluhuakai"
            }
        })
    </script>
```
## 2 计算属性

可以在创建Vue实例传入的参数中定义computed属性。该属性中定义的属性称为计算属性，只有当依赖的属性发生变化是才会重新执行该函数,而methods中函数实在dom发生变化时都会执行。

```vue
  <div id="app">
        <button v-on:click="num++">increase</button>
        <p>{{num}}</p>
        {{result}}
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                num:0
            },
            computed:{
                result:function () {
                    return this.num>5?"more than 5":"less than 5"
                }
            }
        })
    </script>
```
注意：计算属性的调用方式和data中定义的属性一样。
### 2.1侦听器
虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
```vue
      <div id="app">
            <button v-on:click="num++">increase</button>
            <p>{{num}}</p>
        </div>
        <script>
            new Vue({
                el:"#app",
                data:{
                    num:0
                },
                watch:{
                    num:function (newnum,oldnum) {
                        console.log(newnum)
                        console.log(oldnum)
                        var self=this;
                        setTimeout(function () {
                            self.num=0;
                        },2000)
                    }
                }
            })
        </script>
```
当num变化的时候会调用watch中的num(和检测的属性保持一直)函数，2s后将参数还原成0。
### 2.1 使用缩写
Vue中为常用的指令提供了缩写，v-on:click=""可以缩写成@click.
v-bind:href=""可以缩写成:href="".
```vue
<div id="app">
        <button @click="num++">increase</button>
        <p :title="title">{{num}}</p>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                num:0,
                title:"hello"
            }
        })
    </script>
```
### 2.2 给元素添加class
Vue中可以使用：class给类添加class类，即使元素有class属性，两个也不会冲突。
:class接受一个对象，对象的属性是类名，对象的值是true会使用该类。
```vue
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
    <style>
        .demo{
            width: 100px;
            height: 100px;
            background: grey;
        }
        .red{
            background: red;
        }
    </style>
</head>
<body>
    <div id="app">
       <div class="demo" @click="active=!active" :class="{red:active}">

       </div>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                active:false
            }
        })
    </script>
</body>
```
点击div元素，div的背景颜色会在grey和red之间来回切换。如果我们不想直接给：class指定一个对象，我们可以使用计算属性，当active的值改变了，计算属性的值才会重新计算。
```vue
 <div id="app">
       <div class="demo" @click="active=!active" :class="result">

       </div>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                active:false
            },
            computed:{
                result:function () {
                    return {
                        red:this.active
                    }
                }
            }
        })
    </script>
```
我们也可以直接使用类名来来给元素设置类。
```vue
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
    <style>
        .demo{
            width: 100px;
            height: 100px;
            background: grey;
        }
        .red{
            background: red;
        }
        .green{
            background: green;
        }
        .blue{
            background: blue;
        }
    </style>
</head>
<body>
    <div id="app">
       <div class="demo" @click="active=!active" :class="color">

       </div>
        <input type="text" v-model="color">
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                color:"red",
                active:false
            }
        })
    </script>
</body>
```
上面直接将:class设置为data的color的属性值。当我们改变输入框的颜色，div的背景颜色也会发生改变。如果需要设置多个类名，可以使用数组。
```vue
    <div id="app">
       <div class="demo" @click="active=!active" :class="[color,{red:active}]">

       </div>
        <input type="text" v-model="color">
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                color:"red",
                active:false
            }
        })
    </script>
```
### 2.3 使用:style设置样式
:style可以接受一个对象，或者使用计算属性返回一个对象。
```vue
 <div id="app">
       <div class="demo" :style="{backgroundColor:color}">
       </div>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                color:"red"
            }
        })
    </script>
```
当然你也可使用数组的形式设置：style
```vue
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
    <style>
        .demo{
            width: 100px;
            height: 100px;
            background: grey;
        }
    </style>
</head>
<body>
    <div id="app">
       <div class="demo" :style="[mystyle,{backgroundColor:color}]">
       </div>
        <input type="text" v-model="width">
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                color:"red",
                width:"100"
            },
            computed:{
                mystyle:function () {
                    return {width:this.width+"px"}
                }
            }
        })
    </script>
</body>
```
### 2.4 v-if和v-else指令
```vue
   <div id="app">
        <p v-if="show">Hello Vue!</p>
        <p v-else>Hello Vue</p>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{show:false}
        })
    </script>
```
如果v-if中条件为假时，不会渲染当前的dom元素。如果我们要条件显示多个元素，我们可以使用template元素，浏览器不会渲染当前元素。
```vue
  <div id="app">
        <template v-if="show">
            <p>hello</p>
            <p>Vue</p>
        </template>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{show:true}
        })
    </script>
```
### 2.5 v-show 显示和隐藏元素
 使用v-if会将元素从dom中删除，如果我们只是想隐藏元素，那么使用v-show更合理。注意，v-show 不支持 <template> 元素，也不支持 v-else。
 ```vue
<body>
    <div id="app">
        <button @click="ok=!ok">switch</button>
            <p v-show="ok">hello</p>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                ok:false
            }
        })
    </script>
</body>
```

### 2.6 v-for指令主要用来迭代显示数据
迭代数组
```vue
    <div id="app">
         <ul>
             <li v-for="(item,index) in items">{{index+1}}. {{item}}</li>
         </ul>
      </div>
      <script>
          new Vue({
              el:"#app",
              data:{
                  items:["apple","banana","eggs"]
              }
          })
      </script>
```
第一个是数组中的元素，第二是数组的下标。

循环对象数组

```vue
<div id="app">
      <p v-for="person in persons">
          <span v-for="(value,key,index) in person">{{value}},{{key}}, {{index}}</span>
      </p>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                persons:[{name:"lijunjie",age:24},
                    {name:"lichao",age:23},
                    {name:"yaozi",age:24}
                ]
            }
        })
    </script>
```
(value,key,index)分别是对象的属性值,键,和索引。

循环数字(打印1-10)

```vue
  <div id="app">
      <span v-for="n in 10">{{n}}</span>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
              
            }
        })
    </script>
```
当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。
为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。理想的 key 值是每项都有的唯一 id。
你需要用 v-bind 来绑定动态值 (在这里使用简写)：
```vue
  <p v-for="(item,index) in items" :key="index">{{item}}</p>
```

### 2.7 变异方法和非变异方法

变异方法 (mutation method)，顾名思义，会改变被这些方法调用的原始数组。相比之下，也有非变异 (non-mutating method) 方法，例如：filter(), concat() 和 slice() 。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组：
```vue
 <div id="app">
        <button @click="items.reverse()">reverse</button>
        <button @click="items=items.filter((item)=>{return item.match(/app/)
            })">add one</button>
      <p v-for="(item,index) in items" :key="index">{{item}}</p>
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                items:["apple","banana","orange"]
            }
        })
    </script>
```

## 3 Vue实例

可以在一个一面中创建多个Vue实例，不同的Vue实例控制页面中不同的组件。我们可以从外部访问Vue实例。
```vue
 <div id="app1">
        <h1>{{title}}</h1>
        <p>{{Uppertitle}}</p>
        <button @click="change">change title</button>
    </div>
    <div id="app2">
        <h1>{{title}}</h1>
        <p>{{Uppertitle}}</p>
        <button @click="change">change title</button>
    </div>
    <script>
        let vm1=new Vue({
            el:"#app1",
            data:{
                title:"app1"
            },
            computed: {
                Uppertitle:function () {
                    return this.title.toUpperCase()
                }
            },methods:{
                change:function (){
                    this.title="hello vue";
                }
            },
            watch:{
                title:function(newtitle,oldtitle){
                    alert(`title changed from ${oldtitle} to ${newtitle}`);
                }
            }
        })
        let vm2=new Vue({
            el:"#app2",
            data:{
                title:"app2"
            },
            computed: {
                Uppertitle:function () {
                    return this.title.toUpperCase()
                }
            },methods:{
                change:function (){
                    this.title="hello vue";
                }
            },
            watch:{
                title:function(newtitle,oldtitle){
                    alert(`title changed from ${oldtitle} to ${newtitle}`);
                }
            }
        })
        console.log(vm1.title)
        console.log(vm2.title)
    </script>
```
我们创建Vue实例时会传入的对象中的data、methods等属性，Vue会自动帮我们代理到当前Vue实例，并会给每个设置监听。我们可以实例外面给实例添加属性，但是这些属性不会得到监听。
### 3.1.Vue实例的属性
我们可以在控制台打印vm(Vue实例)。可以在控制台看到当前的Vue实例的属性和方法。
```vue
<div id="app1">
        <h1>{{title}}</h1>
    </div>
    <script>
        let data={title:"app1"}
        let vm=new Vue({
            el:"#app1",
            data:data
        })
        console.log(vm)
        console.log(vm.$data===data)  //ture
        console.log(vm.$el) //返回的是当前的模板
    </script>
```
### 3.2 $refs属性
使用：1.在模板中的元素上添加ref属性。
     2.在实例中或者外面用this.$refs.属性获取dom对象
```vue
 <div id="app1">
        <h1 ref="h1">{{title}}</h1>
    </div>
    <script>
        let data={title:"app1"}
        let vm=new Vue({
            el:"#app1",
            data:data
        })
        console.log(vm.$refs.h1.innerHTML)  //app1
    </script>
```
### 3.3 vm.$mount()

如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。
如果没有提供 elementOrSelector 参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。
```vue
  let vm1=new Vue({
            template:"<h1>hello vue</h1>"
        })
        vm.$mount("#app1")
```
或者使用：
```vue
   vm1.$mount()
   document.getElementById('app1').appendChild(vm1.$el)
```

### 3.4 可以复用的实例——组件

```vue
   <div id="app1">
        <hello></hello>
        <hello></hello>
    </div>
    <script>
        let vm1=new Vue({
            el:"hello",
            template:"<h1>hello vue</h1>"
        })
        new Vue({
            el:'#app1'
        })
    </script>
```
输出的结果：
```text
hello vue
```
上面将实例挂载到hello元素上，但是页面上只会显示一个实例的模板。这种方式不能实现实例的复用，我们可以使用Vue.component( id, [definition] )来注册一个全局的组件，因为组件也是实例，所以第二个参数和实例的对象参数差不多。

```vue
  <div id="app1">
         <hello></hello>
         <hello></hello>
     </div>
     <script>
        Vue.component('hello',{
            template:"<h1>Hello Vue</h1>"
        })
        new Vue({
            el:'#app1'
        })
     </script>
```
我们可以在一个通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用：
```text
Hello Vue
Hello Vue
```
### 3.5 template属性和el的区别


template中的属性是模板是字符串，在编译器中不支持语法高亮，字符串如果多行的话，显示的比较乱。
### 3.6 实例的生命周期

官方文档中Vue实例中查看。
其中update和destroy有关的钩子函数不会主主动触发。destory需要调用当前实例的destory方法。销毁实例不是去除dom中的代码，而是切断dom和实例间的联系，无法使用实例来控制dom.


## 4.使用Vue-cli创建项目

具体的使用查看：https://www.npmjs.com/package/vue-cli

### 4.1 render属性

实例的render属性是一种template属性的代替。
```vue
  <div id="app1">

    </div>
    <script>
       new Vue({
           el:'#app1',
           data:{
               name:"hello"
           },
           template:"<h1>{{name}}</h1>"
       })
    </script>
```
效果等价于
```vue
<div id="app1">

</div>
<script>
    new Vue({
        el:'#app1',
        data:{
            name:"hello"
        },
        render:function (h) {
            return h('h1',this.name)
        }
    })
</script>
```
组件在编译模板时会调用render函数并传入createElement()函数作为参数。CreateElement的参数可以是一个实例对象。

### 4.2 组件中的data属性

因为组件是可以复用的，所以组件不能使用data对象设置属性，而需要使用函数返回一个对象。这样可以使组件之间的数据不共享。

### 4.3 组件的注册
组件可以全局注册，也可以局部注册，局部注册的组件只在当前的组件中有效。
```vue
<div id="app1">
    <my-title></my-title>
</div>
<script>

    //定义一个局部组件
    var a_component={
        data:function () {
            return {name:"Hello Vue"}
        },
        template:"<span>{{name}}</span>"
    }
    //在另一个组件中注册
   Vue.component('my-title', {
       data:function(){
           return {
               title:"hello"
           }
       },
       components:{my_component:a_component},
       template:`<div>  <h1>{{title}}</h1>
                        <my_component></my_component>
                </div>`
   })
    new Vue({
        el:"#app1"
    })
</script>
```
项目中可以在main.js中使用生命全局组件。
```text
import Home from './Home.vue'
Vue.component('home',Home)
```
在*.vue中生命一个局部组件。
```vue
<template>
    <div>
      <appServerStatus v-for="num in 5"></appServerStatus>
    </div>
</template>

<script>
    import AppServerStatus from './AppServerStatus.vue'
    export default {
        name: "Home",
        data(){
          return {
            status:"ERROR"
          }
        },
        components:{
          appServerStatus:AppServerStatus
        },
        methods:{
          changeStatus(){
            this.status="NORMAl"
          }
        }
    }
</script>

<style scoped>

</style>
```
### 4.4 组件的样式

在*.Vue文件中使用style设置的是全局样式，style scoped设置该组件的样式。

## 5.组件间通信

### 5.1 父子组件通信

方法1：自定义事件
方法2：回调函数

### 同级组件间通信

方法1：自定义事件
方法2：回调函数
方法3：eventbus
