# ES6中的函数

## 1.ES5中默认参数
在es5中我们不能使用默认参数，但我们可以使用||运算符来给函数设置默认参数。
```javascript
function foo(name,callback){
    name=name||'yiluhuakai';
    callback=callback||function(){}; 
    return name;
}
//调用方法会使用默认的参数
let a=foo();  //yiluhuakai
a=foo("")  //yiluhuakai
```
这种实现默认参数方法有一个问题，但我们传入的值可以转化成false时，那么他就会使用默认值，比如上面我们传入的空字符串。
更安全的操作是使用typeof运算符来设置默认参数。
```javascript
function foo(name,callback){
    name=(typeof name!=="undefined")?name:'yiluhuakai';
    callback=(typeof callback!=="undefined")?callback:function(){}; 
    return name;
}
//调用方法会使用默认的参数
let a=foo();  //yiluhuakai
a=foo("")  //""
```
## 2.ES6中的默认参数

```javascript
function foo(name, age = 24, callback = function () { }) {
    return name;
}
```
其中name是必须传入的参数，age和callback是可选参数。
```javasript
//调用方法
foo("yiluhuakai");  //yiluhuakai
foo("yiluhuakai", 0);  //yiluhuakai
foo("yilihuakai",0,function(){console.log("hello")})
```
当然你也可以不传入任何参数去调用方法，那么第一个参数的值是undefined,其余的参数使用默认值。

可以为任意位置的参数指定默认值。
```javascript
function foo(name, age = 24,callback) {
    return name;
}
```
当我们指定第二个参数的值为（===）undefined时或只传入一个参数，才会使用默认值。

```javascript
function foo(name, age = 24,callback) {
    console.log(age)
    return name;
}
//调用方法会使用默认的参数
foo("yiluhuakai");  //打印24
foo("yiluhuakai",undefined,function(){})  //打印24
foo("yiluhuakai",null,function(){})  //打印null
```
## 3.arguments对象
ES5非严格模式下形参的修改会同步到arguments中
```javascript
function foo(first,second) {
    console.log(first==arguments[0])
    console.log(second==arguments[1])
    first="c";
    second="d";
    console.log(first==arguments[0])
    console.log(second==arguments[1])
}
foo('a','b')
```
输出的结果：
```text
true  
true  
true  
true  
```
但是ES5严格模式下不会同步
```javascript
function foo(first,second) {
    "use strict"
    console.log(first==arguments[0])
    console.log(second==arguments[1])
    first="c";
    second="d";
    console.log(first==arguments[0])
    console.log(second==arguments[1])
}
foo('a','b')
```
ES中如果使用了默认值参数，无论是否显示定义严格模式，都将和ES5中的严格模式保持一致。
```javascript
function foo(first,second=1) {
    console.log(arguments.length)
    console.log(first==arguments[0])
    console.log(second==arguments[1])
    first="c";
    second="d";
    console.log(first==arguments[0])
    console.log(second==arguments[1])
}
foo('a','b')  
```
```text
2
true
true
false
false
```
如果调用是只传入一个参数，那么arguments.length返回1.

## 4.默认参数的值设定
我们在设置函数的默认参数时除了给原始值，还可以将函数调用表达式赋值给默认参数。
```javascript
function bar(){
    console.log("hello")
    return 5;
}
function foo(first,second=bar()) {
    return "hello"
}
foo('a','b')  
foo("a")
```
只有使用默认参数时，才会调用bar函数。

我们也可以用第一个参数来设置第二个参数的默认值，或者将第一个参数作为第二个参数的默认值函数的形参来使用。
```javascript
function foo(first,second=first){

}
function bar(first,second=getValue(first)){

}
```
但是不能用第二个参数的值来设置第一个参数的默认值。
```javascript
function foo(first=second,second){
    return first+second
}
foo(1,1)  //2
foo(undefined,1)  //Error
```
这个因为函数也有临时死区。
当我们调用函数时，会使用是实参初始化形参。类似于
```javascript
let first=second
let second=1
```
second参数在let声明之前都是临时死区，所以不能使用。

## 5.不定参数
在函数的形参前加(...)表面该参数是一个不定参数，该参数为一个数组。

```javascript
function foo(first, ...second) {
    console.log(foo.length) //1
    console.log(second)
}
foo(1, 1, 2)  //打印 [1,2]
```
不定参数会影响函数的length属性（形参的个数）。
不定参数的限制：
1. 一个函数只能有一个不定参数，而且只能放在最后面。
2. 不定参数不能用于对象字面量的setter方法中(只能接受一个参数)。
```javascript
let obj={
    set name(...value){
        this.value=value;
    }
}
```
违反以上的限制程序都会报错。
```
function foo(first, ...second) {
   console.log(arguments.length)  //3
}
foo(1, 1, 2)  //打印 [1,2]
```
## 6.Function构造函数

Function构造函数也增加了对默认参数和不定参数的支持。
```javascript
let foo=new Function('foo=1','return foo');
let a=foo()
console.log(a) //1
let bar=new Function('...foo','console.log(foo)')
bar(1,2) //[1,2]
```

## 7.展开运算符
展开运算符用于将传入的实参展开。
eg:返回数组中的最大值：
```javascript
let value=[1,2,3,4]
let max=Math.max.apply(Math,value)
console.log(max) //4
```
使用展开运算符：
```javascript
let value=[1,2,3,4]
let max=Math.max(...value) //4
//限定返回的最大值大于
max=Math.max(...value,5)
console.log(max) //5
```
## 8.函数的name属性
ES6中为每个函数都提供了一个name属性，用于辨别函数。
```javascript
function bar(){

}
var foo=function () {

}
console.log(bar.name)  //'bar'
console.log(foo.name)  //'foo'
```
函数声明语句中函数的name属性对应函数名称，表达式函数中函数的name属性对应着变量的名称。

name属性的特殊情况

```javascript

var foo=function bar() {

}
var obj={
    get firstName(){
        return "hello";
    },
    set firstName(value){
        this.x=value;
    },
    sayName:function () {
        console.log(this.getname)
    }
}
console.log(foo.name)  //'bar'
console.log(obj.sayName.name)  //'sayName'
const descriptor = Object.getOwnPropertyDescriptor(obj, 'firstName');
console.log(descriptor.get.name)  //'get firstName'
console.log(descriptor.set.name)  //'set firstName'
```
从上面可以看出函数的名称的优先级高于函数的引用，对象的set、get方法对应的函数的name属性会在前面加上set、get。对象的方法的name属性就是方法名。

```javascript

var foo=function() {

}
console.log(foo.bind(this).name)  //'bound foo'

var fn=new Function('name','return name');
console.log(fn.name)  //'anonymous'
```
绑定函数的name属性会加上‘bound’字符,通过构造函数创建的函数，名字为'anonymous'.

## 9.new.target属性
```javascript
function  Person(name){
    this.name=name
}
let p=new Person('Hello')
console.log(p.name)
//给全局对象添加了一个属性
Person('Hello');
console.log(global.name) //'Hello'
```
ES6中提供了判断是通过new.target属性函数是作为构造方法调用的还是函数调用的。当作为构造函数来调用时，new.target指向构造函数，作为函数调用时，指向undefined.
```javascript
function  Person(name){
    if(new.target===Person)
        console.log('构造函数')
    else if((typeof new.target)==='undefined')
        console.log('函数调用')
    this.name=name
}
let p=new Person('Hello') //构造函数

Person('Hello'); // 函数调用
```
## 10.块级函数
ES5的严格模式下声明块级函数会报错，但是在ES6可以声明块级函数。
```javascript
"use strict"
if(true) {
    console.log(typeof f)  //'function'
    function f() {

    }
}
console.log(typeof f)  //'undefined'
```
(严格模式下)函数只能在代码块中可见。

块级函数和let表达式声明的函数的区别是：都只能在块中使用但是let声明以前不可用。
```javascript
"use strict"
if(true) {
    //console.log(typeof f) //报错
    let f=function () {

    }
}
console.log(typeof f)  //'undefined'
```
ES6的非严格模式下，块级函数会被提升至全局作用域的顶部。
```javascript

if(true) {
    console.log(typeof f) //'function'
    function f() {

    }
}
console.log(typeof f)  //'function'
```
## 11.箭头函数

箭头函数和普通函数的区别：
1. 没有this、super、arguments、和new.target
2. 不能使用new关键字调用，没有原型。
3. 不可以改变this绑定。

```javascript

let foo=()=>{return 10}
console.log(foo())  //10
```
上面的操作实际上相当于
```javascript
let foo=function(){
    return 10
}
console.log(foo())  //10
```
当箭头函数只有一个参数时，可以省略(),当函数体只有一条语句时，可以省略{}和return.
```javascript
let foo=value=>value
```
//相当于
```javascript
let foo=function() {
   return value
}
```
当返回的是一个对象时一个对象字面量时，需要使用（）把对象字面量包起来。
```javascript
let bar=()=>({foo:123})
//相当于
let bar1=function () {
    return{
        foo: 123
    }
}
```
箭头函数也可以实现即使调用
```javascript
let bar=((value)=>({foo:value}))(123)
//相当于
console.log(bar.foo)//123
```
箭头函数的this和arguments是父函数的。
```javascript
function f(value) {
    return ()=>arguments[0]
}

console.log(f(5)()) //5

let foo1={
    bar:function () {
        return "bar"
    },
    foo:function () {
        let f1 = () =>this.bar();
        return f1()
    }

}
console.log(foo1.foo()) // bar
```