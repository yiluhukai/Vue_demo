<template>
    <div id="dashboard">
        <h1>That's the dashboard!</h1>
        <p>You should only get here if you're authenticated!</p>
        <p v-if="email">user email address: {{email}}</p>
    </div>
</template>
<script>
    export default {
        created() {
            this.$store.dispatch('fetchData')
        },
        computed: {
            email() {
                return this.$store.getters.user ? this.$store.getters.user.email : false;
            }
        }
    }
</script>
<style scoped>
    h1, p {
        text-align: center;
    }

    p {
        color: red;
    }
</style>