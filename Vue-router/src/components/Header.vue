<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
    <!--<router-link to="/user/10" tag="li" active-class="active"><a>Users</a></router-link>-->
    <!--<router-link to="/user/11" tag="li" active-class="active"><a>Users</a></router-link>-->

    <router-link to="/user" tag="li" active-class="active"><a>Users</a></router-link>
  </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
