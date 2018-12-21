<template>
    <div>
      <appServerStatus v-for="server in 5"></appServerStatus>
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
