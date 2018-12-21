<template>
    <div>
      <h2>New</h2>
    </div>
</template>

<script>
    export default {
        name: "New",
        beforeDestroy(){
        console.log(`${this.name} is destoried`)
        }
    }
</script>

<style scoped>

</style>
