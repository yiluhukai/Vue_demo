<template>
    <div>
      <div class="form-group">
        <label>firstname</label>
        <input type="text" class="form-control" :value="firstName"  @input="changeName(true,$event)">
      </div>
      <div class="form-group">
        <label>lastname</label>
        <input type="text" class="form-control" :value="lastName"  @input="changeName(false,$event)">
      </div>
    </div>
</template>

<script>
    export default {
        name: "FullName",
        props:["value"],
        computed:{
          firstName(){
            return this.value.split(" ")[0];
          },
          lastName(){
              return this.value.split(" ")[1];
          }
        },methods:{
          changeName(isFirst,event){
            let name=""
            if(isFirst)
               name=event.target.value+' '+this.lastName
             else
               name=this.firstName+" "+event.target.value
             this.$emit('input',name)
          }
        }
    }
</script>

<style scoped>

</style>
