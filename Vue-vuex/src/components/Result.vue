<template>
    <p>Counter is:{{counter}}</p>
</template>

<script>
    export default {
        name: "Result",
        //props:{counter:Number}
        computed:{
          counter(){
            //return this.$store.state.counter*2
            console.log(this.$store.state.counter)
            return this.$store.getters.doubleCountere
          }
        }
    }
</script>

<style scoped>

</style>
