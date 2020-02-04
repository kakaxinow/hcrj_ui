<template>
    <div class="tabs-header">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-header",
        inject:['eventBus'],
        created() {
            //console.log('爷爷给爸爸到eventbBus');
        }
    }
</script>

<style scoped>
.tabs-header{

}
</style>