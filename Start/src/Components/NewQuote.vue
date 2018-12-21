<template>
    <div class="row">
            <form>
                <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-2 col-xs-12 form-group">
                    <label>Quote:</label>
                    <textarea class="form-control" rows="3" v-model="quote"></textarea>
                </div>
                <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-2 col-xs-12 form-group">
                    <button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
                </div>
            </form>
    </div>
</template>

<script>
    export default {
        name: "NewQuote",
        data(){
            return {
                quote:"",
            }
        },
        methods:{
            addQuote(){
                this.$emit('quoteWasAdd',this.quote);
                this.quote=""
            }
        }
    }
</script>

<style scoped>

</style>