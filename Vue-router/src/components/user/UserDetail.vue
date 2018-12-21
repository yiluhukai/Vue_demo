<template>
  <div>
    <h3>Some User Details</h3>
    <hr>
    User ID:{{$route.params.id}}
    <!--<router-link tag="button"-->
                 <!--to="'/user/'+$route.params.id+'/edit'"-->
                 <!--class="btn btn-primary">-->
      <!--Edit User-->
    <!--</router-link>-->

    <router-link tag="button"
                 :to="link"
                 class="btn btn-primary">
      Edit User
    </router-link>
  </div>
</template>

<script>
   export default {
     data(){
       return {
         link:{name:'userEdit',
           params:this.$route.params.id,
           query:{
           name:'yiluhukai',
             age:24
           },
           hash:'#data'
         }
       }
     },
     beforeRouteEnter (to, from, next) {
       if(true)
       {
         next()
       }else{
         next(false)
       }
       // next(vm => {
       //   // 通过 `vm` 访问组件实例
       // })
     }
   }
</script>
