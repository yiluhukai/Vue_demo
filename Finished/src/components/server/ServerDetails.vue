<template>
    <div class="col-xs-12 col-sm-6">
        <p  v-if="!server">Server Details are currently not updated</p>
        <p  v-else>Server #{{server.id}},Server details: {{server.status}}</p>
        <hr>
        <button @click="changeStatus">changeStatus</button>
    </div>

</template>

<script>
    import {eventBus} from './../../main.js'
    export default {
        data(){
            return {
                server:null
            }
        },
        methods:{
          changeStatus(){
              this.server.status="Normal";
          }
        },
        created(){
            eventBus.$on("serverWasSelect",(server)=>{this.server=server})
        }
    }
</script>

<style>

</style>
