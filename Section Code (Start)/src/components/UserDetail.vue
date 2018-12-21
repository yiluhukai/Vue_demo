<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>name:{{name}}</p>
        <p>{{reverseName}}</p>
        <p>User age is {{userAge}}</p>
        <button v-on:click="resetName">resetName</button>
        <button v-on:click="restNameFn()">resetName</button>
    </div>
</template>

<script>
    import {eventBus} from '../main.js'
    export default {
        // props:['name'],
        //对传入属性的类型进行验证
        props:{
            name:String,
            restNameFn:Function,
            userAge:Number
        },
        computed:{
            reverseName(){
                return this.name.split("").reverse().join("");
            }
        },methods:{
            resetName(){
                this.name="yiluhukai";
                this.$emit("resetName",this.name)
            }
        },
        created(){
            eventBus.$on("ageWasEdit",(age)=>this.userAge=age)
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
