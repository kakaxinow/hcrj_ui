<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading" v-if="loading" name="#icon-loading"></g-icon>
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
       loading:{
           type:Boolean,
           default:false
       },
       //props第二种写法
       iconPosition:{
           type:String,
           default:'left',
           validator(value){
               return !(value!=='left' && value!=='right') 
           }
       }
   }
}
</script>
<style lang="scss">
 @keyframes spin{
     0%{transform: rotate(0deg)}
     100%{transform: rotate(360deg)}
 }
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
        .loading{
            animation : spin 2s infinite linear;
        }
    }
    
</style>
