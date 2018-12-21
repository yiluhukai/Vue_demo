<template>
        <li
                class="list-group-item" v-on:click="serverSelect">
            Server #{{ server.id}}
        </li>
</template>

<script>
    import {eventBus} from './../../main.js'
    export default {
        props:['server'],
        methods:{
            serverSelect(){
                eventBus.$emit('serverWasSelect',this.server)
            }
        }

    }
</script>

<style scoped>

</style>