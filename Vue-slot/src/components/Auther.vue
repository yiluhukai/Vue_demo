<template>
  <div>
    <h2>Auther</h2>
  </div>
</template>

<script>
    export default {
      name: "Auther",
      beforeDestroy(){
          console.log(`${this.name} is destoried`)
        },
      activated(){
        console.log(`Auther is  activated`)
      },
      deactivated(){
        console.log(`Auther is  deactivated`)
      }
    }
</script>

<style scoped>

</style>
