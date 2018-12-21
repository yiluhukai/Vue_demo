<template>
    <div class="row">
        <div class="col-xs-12">
            <h3>Quote Added</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width:(quoteCount/maxquote)*100+'%'}">
                    {{quoteCount}} / {{maxquote}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props:['maxquote','quoteCount']

    }
</script>

<style scoped>

</style>