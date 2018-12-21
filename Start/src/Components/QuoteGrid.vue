<template>
    <div class="row">
            <app-quote v-for="(quote,index) in quotes" @click.native="deleteQuote(index)">
                <p>{{quote}}</p>
            </app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue'
    export default {
        name: "QuoteGrid",
        props:['quotes'],
        components:{
            appQuote:Quote
        },
        methods:{
            deleteQuote(index){
                this.$emit("quoteWasDelete",index)
            }
        }
    }
</script>

<style scoped>

</style>