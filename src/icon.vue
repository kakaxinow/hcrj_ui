<template>
    <svg class="g-icon">
        <use :xlink:href = `${name}`></use>
    </svg>
</template>
<script>
export default {
    props:['name']
}
</script>
<style>
.g-icon{width:1em;height: 1em;}
</style>
