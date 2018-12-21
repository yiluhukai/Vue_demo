<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link class="list-group-item" tag="li" style="cursor: pointer" to="/user/1">
            User1
            </router-link>
            <router-link class="list-group-item" tag="li" style="cursor: pointer" to="/user/2">
            User2
            </router-link>
            <router-link class="list-group-item" tag="li" style="cursor: pointer" to="/user/3">
              User3
            </router-link>
        </ul>
    </div>
</template>
