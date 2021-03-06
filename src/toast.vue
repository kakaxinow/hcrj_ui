<template>
    <div class="toast" ref="wrap" :class="toastClasses">
        <slot></slot>
        <div class="line" ref="line"></div>
        <span v-if="closeButton" class="closetext" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "toast",
        props:{
            autoClose:{
                type:Boolean,
                default:true
            },
            autoCloseDelay:{
                type:Number,
                default: 3
            },
            closeButton:{
                type:Object,
                default(){
                    return {
                        text:"关闭",
                        callback:undefined
                    }
                }
            },
            position:{
                type:String,
                default:'middle',
                validator(value){
                    return ['top','bottom','middle'].indexOf(value)>=0
                }
            }
        },
        computed:{
            toastClasses(){
                return {
                    [`position-${this.position}`]:true
                }
            }
        },
        mounted() {
            this.updateStyles();
            this.execAutoClose();
            console.log(this.position);
        },
        methods:{
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close();
                    },this.autoCloseDelay*1000);
                }
            },
            updateStyles(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height = `${this.$refs.wrap.getBoundingClientRect().height}px`;
                })
            },
            close(){
                this.$el.remove();
                this.$emit("beforeClose");
                this.$destroy();
            },
            onClickClose(){
                this.close();
                if(this.closeButton && typeof this.closeButton.callback==='function'){
                    this.closeButton.callback();
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $height:40px;
    $toast-bg:rgba(0,0,0,0.75);
    @keyframes fadeIn {
        0%{opacity: 0;transform: translateY(100%)}
        100%{opacity: 1;transform: translateY(0%)}
    }
.toast{
    animation: fadeIn 1s;
    font-size: $font-size;
    line-height:1.8;
    min-height: $height;
    background-color: $toast-bg;
    border-radius: 4px;
    color: white;
    padding: 0 16px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    position: fixed;
    left: 50%;
    display: flex;
    align-items: center;
    .closetext{
        margin-left: 16px;
        flex-shrink: 0;
    }
    .line{
        height: 100%;
        border: 1px solid #666;
        margin-left: 6px;

    }
    &.position-top{
        top: 0;
        transform: translateX(-50%);

    }
    &.position-bottom{
        bottom:0;
        transform: translateX(-50%);

    }
    &.position-middle{
        top: 50%;
        transform: translate(-50%,-50%);

    }

}

</style>