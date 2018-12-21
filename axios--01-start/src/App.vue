<template>
    <div id="app">
        <app-header/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/header/header.vue'
    import Loading from './components/header/loading.vue'

    export default {
        name: 'app',
        components: {
            'app-header': Header,
            appLoading: Loading
        },
        created() {
            console.log('app created')
            this.$store.dispatch('tryAutoLogin')
        },
        computed: {
            loading(){
                return this.$store.getters.loading;
            }
        }
    }
</script>

<style>
    body, html {
        margin: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
</style>