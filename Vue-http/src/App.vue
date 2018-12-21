<template>
  <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Http</h1>
          <div class="form-group">
            <label>Userame</label>
            <input type="text" class="form-control" v-model="user.username">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model="user.email">
          </div>
          <button class="btn btn-primary" @click="submit">Submit</button>
          <br><br>
          <div class="form-group">
             <label>数据类型</label>
            <!--<input type="text" v-model="node" class="form-control">-->
            <select  class="form-control" v-model="selectedNode">
               <option v-for="nodeValue in selectedNodes" :value="nodeValue">{{nodeValue}}</option>
            </select>
          </div>
          <button class="btn btn-primary" @click="fetchData">Get Data</button>
          <ul class="list-group">
            <li class="list-group-item" v-for="user in users">{{user.username}}----{{user.email}}</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      user:{
        username:'',
        email:""
      },
      users:[],
      resource:{},
      selectedNode:'users',
      selectedNodes:['users','alter']
    }
  },methods:{
    submit(){
      console.log(this.user)
      // this.$http.post('users.json',this.user).
      //   then((result)=>{
      //     console.log(result)
      // },(error)=>{
      //     console.log(error)
      // })

      //this.resource.save({},this.user)
      //调用自定义方法
      this.resource.saveAlter(this.user);
    },
    fetchData(){
      // this.$http.get('users.json').then(
      //   (result)=>{
      //     //this.users=result.body
      //     return result.json()
      //   },(error)=>{
      //     console.log(error.message)
      //   }).then((data)=>{
      //     this.users=[];
      //     for(let key in data)
      //     {
      //       this.users.push(data[key])
      //     }
      // })
      this.resource.getDatas({node:this.selectedNode}).then(
        (result)=>{
          //this.users=result.body
          return result.json()
        },(error)=>{
          console.log(error.message)
        }).then((data)=>{
          this.users=[];
          for(let key in data)
          {
            this.users.push(data[key])
          }
      })
    }
  },created(){
    //this.resource=this.$resource('users.json')

    //自定义操作
    var customActions = {
      saveAlter: {method: 'post', url: 'alter.json'},
      //使用动态url
      getDatas:{method:'get',}
    }
    //this.resource=this.$resource('users.json',{},customActions)
    this.resource=this.$resource('{node}.json',{},customActions)
  }
}
</script>

<style>

</style>
