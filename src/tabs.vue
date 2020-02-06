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
                required:true
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
            //this.$emit("update:selected","这是this.emit出来的数据");
            //this.eventBus.$emit("update:selected","这是this.eventBus出来的数据");
        },
        mounted() {
            this.eventBus.$emit('update:selected',this.selected);
        }
    }
</script>

<style scoped>

</style>