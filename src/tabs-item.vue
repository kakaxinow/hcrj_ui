<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-item",
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        inject: ['eventBus'],
        created() {
            //console.log('爷爷给孙子到eventbBus');
            this.eventBus.$on("update:selected",name=>{
                if(name===this.name){
                    this.active=true;
                }else{
                    this.active=false;
                }
            })
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        },
        methods: {
            xxx() {
                this.eventBus.$emit("update:selected", this.name);
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        &.active{
            background-color: red;
        }
    }
</style>