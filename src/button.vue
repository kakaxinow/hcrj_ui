<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href = `${icon}`></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
   //props:['icon','iconPosition']
   props:{
       icon:{},
       iconPosition:{
           type:String,
           default:'left'
       }
   }
}
</script>
<style lang="scss">
 .g-button{
        padding: 0 .5em;
        font-size: var(--font-size);
        height: var(--button-height);
        background-color: var(--button-bg);
        color: var(--color);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover{border-color: var(--border-color-hover);}
        &:active{background-color: var(--button-bg);}
        &:focus{outline: none;}
        > .content{ order:2; }
        > .icon{ order:1; margin-right: .1em;margin-left: 0;}
        &.icon-right{
            > .content{ order:1; }
            > .icon{ order:2;margin-right: 0;margin-left: .1em; }
        }
    }
    
</style>
