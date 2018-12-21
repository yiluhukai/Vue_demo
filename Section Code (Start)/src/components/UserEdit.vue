<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age is {{userAge}}</p>
        <button v-on:click="editAgeFn()">editAge</button>
        <!--事件总线-->
        <button v-on:click="editAge">editAge</button>

    </div>
</template>

<script>
    import {eventBus} from '../main.js'
    export default {
        props:['userAge','editAgeFn'],
        methods:{
            editAge(){
                this.userAge=27;
                //eventBus.$emit("ageWasEdit",this.userAge)
                eventBus.editAge(this.userAge)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
