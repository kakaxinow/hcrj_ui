<template>
    <div class="popover" @click="xxx">
        <div class="wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "popover",
        data(){
            return {
                visible:false
            }
        },
        methods:{
            xxx(){
                this.visible=!this.visible;
            }
        }
    }
</script>

<style scoped>

</style>