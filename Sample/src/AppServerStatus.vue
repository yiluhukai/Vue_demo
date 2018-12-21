<template>
    <div>
      Server Status:{{status}}
      <button @click="changeStatus">ChangeStatus</button>
    </div>
</template>

<script>
    export default {
      name: "AppServerStatus",
      data(){
        return {
          status:"ERROR"
        }
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
