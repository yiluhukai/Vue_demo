<template>
  <div class="container">
    <div class="row" v-if="!isSubmitted">
      <div class="col-xs-12 col-md-6 col-md-offfset-3 col-sm-8 col-sm-offset-2">
        <form class="toppadding">

          <app-full-name v-model="fullName"></app-full-name>

          <div class="form-group">
            <label>email</label>
            <input type="text" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label>
              <input type="radio" value="Yes" name="choice" v-model="radioChoice"> Yes
            </label>
            <label>
              <input type="radio" value="No" name="choice" v-model="radioChoice"> NO
            </label>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-default" @click.prevent="submitted">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row toppadding" v-else>
      <div class="col-xs-12 col-md-6 col-md-offfset-3 col-sm-8 col-sm-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
              <p>Name:{{fullName}}</p>
              <p>email:{{email}}</p>
              <p>radioChoice:{{radioChoice}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FullName from './Component/FullName.vue'
export default {
  name: 'app',
  data () {
    return {
       isSubmitted:false,
       fullName:"li chao",
       email:"",
       radioChoice:"Yes",
    }
  },methods:{
    submitted(){
      this.isSubmitted=true;
    }
  },components:{
    appFullName:FullName
  }
}
</script>

<style scoped>
  .toppadding{
    padding-top: 20px;
  }
</style>
