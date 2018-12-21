<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button class="btn btn-primary" @click="goHome">Go to home</button>
    <br>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
   /*
    export default {
      data(){
        return {
          id:this.$route.params.id
        }
      },
      watch:{
        //检测路由参数的改变
        '$route'(to,from){
          this.id=to.params.id
        }
      },
      // computed:{
      //   id(){
      //     return this.$route.params.id
      //   }
      // },
      methods:{
        goHome(){
          this.$router.push('/');
        }
      }
    }
    */
   export default {
     methods:{
       goHome(){
         //this.$router.push('/');
         this.$router.push({name:'home'});
       }
     }
   }
</script>
