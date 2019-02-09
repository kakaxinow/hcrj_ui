<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$el.children);
        for(let node of this.$el.children){
            var nodename=node.nodeName.toLowerCase();
            //console.log(nodename);
            // if(nodename!=='button'){
            //     console.warn("buttonGroup组件下必须全是button");
            // }
        }
    }
}
</script>
<style lang="scss">
.g-button-group{
    // display: inline-flex;
    // vertical-align: middle;
}
</style>
