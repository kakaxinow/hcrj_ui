<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabs-header",
        inject: ['eventBus'],
        created() {
            //console.log('爷爷给爸爸到eventbBus');
        }
    }
</script>

<style scoped lang="scss">
    $tabs-height:40px;
    .tabs-header {
        display: flex;
        height: $tabs-height;
        justify-content: flex-start;
        align-items: center;
        /*border: 1px solid red;*/
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>