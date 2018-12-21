<template>
    <div>
      <button class="btn btn-primary" @click="increment">increment</button>
      <button class="btn btn-primary" @click="decrement">Decrement</button>
      <button class="btn btn-primary" @click="asyncIncrement({delay:2000})">aysnc imcrement</button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        methods:{
          increment(){
            //this.$emit('updateCounter',1)
            //this.$store.state.counter++
            //使用mutations
            this.$store.commit('increment')
          },
          decrement(){
            //this.$emit('updateCounter',-1)
            //this.$store.state.counter--
            //使用mutations
            this.$store.commit('decrement')
          },
          asyncIncrement(payload){
            //分发actions
             this.$store.dispatch('asyncIncrement',payload)
          }
        }
    }
</script>

<style scoped>

</style>
