<template>
    <div class="tabs">
        <slot></slot>
    </div>

</template>

<script>
    import Vue from 'vue'
    export default {
        name: "tabs",
        props:{
            selected:{
                type:String,
                default:'sports'
            },
            direction:{
                type:String,
                default:'horizontal',//横向排列
                validator(value){
                    return ['horizontal','vertical'].indexOf(value)>=0
                }
            }
        },
        data(){
            return {
                eventBus:new Vue()
            }
        },
        provide(){
            return {
                eventBus:this.eventBus
            }
        },
        created() {

        },
        mounted() {
            this.eventBus.$emit('update:selected',this.selected);
        }
    }
</script>

<style scoped>

</style>