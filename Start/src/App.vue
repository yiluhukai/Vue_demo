<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxquote="maxQuotes"></app-header>
        <app-new-quote v-on:quoteWasAdd="addQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteWasDelete="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-xs-12 text-center">
                <div class="alert alert-info">
                    Info:Click on a Quote to Delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './Components/QuoteGrid.vue';
    import NewQuote from './Components/NewQuote.vue';
    import Header from './Components/Header.vue'
    export default {

        data(){
            return {
                quotes:['I think,therefore I am!'],
                maxQuotes:10
            }
        },
        components:{
            appQuoteGrid:QuoteGrid,
            appNewQuote:NewQuote,
            appHeader:Header
        },
        methods:{
            addQuote(quote){
                if(this.quotes.length>=this.maxQuotes)
                {
                   return  alert('Please delete quote first!')
                }
                this.quotes.push(quote);
            },
            deleteQuote(index){
                this.quotes.splice(index,1);
            }
        }
    }
</script>

<style>
</style>
