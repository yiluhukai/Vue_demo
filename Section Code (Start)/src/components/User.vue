<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>My name  is {{name}}</p>
        <p>My age  is {{age}}</p>
        <button v-on:click="changeName">changeName</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name"
                                 :restNameFn="resetName"
                                 v-on:resetName="name=$event"
                                 :userAge="age">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" :editAgeFn="editAge"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },data(){
            return {
                name:"yiluhukai",
                age:24
            }
        },methods:{
            changeName(){
                this.name="MAX"
            },
            resetName(){
                this.name="yiluhukai";
            },editAge(){
                this.age=27;
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
