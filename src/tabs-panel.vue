<template>
    <div class="tabs-panel">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-panel",
        inject:['eventBus'],
        created() {
            this.eventBus.$on("update:selected",name=>{
                console.log(name);
            })
        }
    }
</script>

<style scoped>
.tabs-panel{

}
</style>