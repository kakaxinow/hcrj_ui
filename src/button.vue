<template>
    <button>按钮2</button>
</template>
<script>
export default {
   
}
</script>
<style lang="scss">
 .g-button{
        padding: 0 1em;
        font-size: var(--font-size);
        height: var(--button-height);
        background-color: var(--button-bg);
        color: var(--color);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        &:hover{
        border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-bg);
        }
        &:focus{
            outline: none;
        }
    }
    
</style>
