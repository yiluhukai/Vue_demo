<template>
  <div>
    <h3>Edit the User</h3>
    <p>Name:{{$route.query.name}}</p>
    <p>Age:{{$route.query.age}}</p>
    <button class="btn btn-primary" @click="saved=true">Save info</button>
    <div style="height: 1000px;width:100px"></div>
    <a name="data">Some extra data</a>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        saved:false
      }
    },
    beforeRouteLeave(to,from,next) {
      if (this.saved)
        next()
      else if (confirm('You have saved?')) {
        next()
      } else {
        next(false)
      }
    }
  }
</script>
