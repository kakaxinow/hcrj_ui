<template>
    <g-tabs selected="tab1">
        <g-tabs-nav>
            <g-tabs-item name="tab1"></g-tabs-item>
            <g-tabs-item name="tab2"></g-tabs-item>
        </g-tabs-nav>
        <g-tabs-content>
            <g-tabs-pane name="tab2"></g-tabs-pane>
            <g-tabs-pane name="tab1"></g-tabs-pane>
        </g-tabs-content>
    </g-tabs>

</template>

<script>
    export default {
        name: "tabs"
    }
</script>

<style scoped>

</style>