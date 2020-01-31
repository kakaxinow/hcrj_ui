<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
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
                default: 500
            },
            closeButton:{
                type:Object,
                default(){
                    return {
                        text:"关闭",
                        callback:(toast)=>{
                            toast.close();
                        }
                    }
                }
            }
        },
        mounted() {
            if(this.autoClose){
                setTimeout(()=>{
                    this.close();
                },this.autoCloseDelay*1000);
            }
        },
        methods:{
            close(){
                this.$el.remove();
                this.$destroy();
            },
            onClickClose(){
                this.close();
                this.closeButton.callback();
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $height:40px;
    $toast-bg:rgba(0,0,0,0.75);

.toast{
    font-size: $font-size;
    line-height:1.8;
    height: $height;
    background-color: $toast-bg;
    border-radius: 4px;
    color: white;
    padding: 0 16px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
}
    .closetext{
        margin-left: 16px;
    }
.line{
    height: 100%;
    border: 1px solid #666;
    margin-left: 6px;

}
</style>