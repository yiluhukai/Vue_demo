export let FruiteMixin={
  data () {
    return {
      fruites:['Apple',"Banana","Mango","Melon"],
      filterText:""
    }
  },computed:{
    filterFruites(){
      return this.fruites.filter((element)=>{
        return element.match(this.filterText)
      })
    }
  },created(){
    console.log('混入对象的钩子被调用')
  }
}
