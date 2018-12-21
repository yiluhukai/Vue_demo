<template>
    <div>
      <slot name="title">defult title</slot>
      <slot name="content"></slot>
    </div>
</template>

<script>
    export default {
        name: "Quote",
        beforeDestroy(){
        console.log(`${this.name} is destoried`)
        }
    }
</script>

<style scoped>
   div{
     border:1px solid #ccc;
     box-shadow: 1px 1px 2px black;
     padding: 30px;
     margin:30px auto;
     text-align: center;
   }
  h2{
    color:red;
  }
  .title{
    font-style: italic;
  }
</style>
