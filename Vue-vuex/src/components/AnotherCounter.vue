<template>
  <div>
    <button class="btn btn-primary" @click="increment">increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    <button class="btn btn-primary" @click="asyncIncrement({delay:1000})">ansyc increment</button>
  </div>
</template>

<script>
  import { mapMutations,mapActions } from 'vuex'
    export default {
        name: "AnotherCounter",
        methods:{
          ...mapMutations(['increment','decrement']),
          ...mapActions(['asyncIncrement'])
        }
    }
</script>

<style scoped>

</style>
