<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collapseItem",
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', name => {
                if (name != this.name) {
                    if(this.single){
                        this.close();
                    }
                } else {
                    this.show();
                }
            })
        },
        data() {
            return {
                open: false
            }
        },
        methods: {
            toggle() {
                if (this.open) {
                    this.open = false;
                } else {
                    //this.open = true;
                    this.eventBus.$emit("update:selected", this.name);
                }
            },
            close() {
                this.open = false;
            },
            show() {
                this.open = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapseItem {
        > .title {
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }

        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }

        > .content {
            /*padding: 8px;*/
            height: 60px;
            line-height: 35px;
        }

    }
</style>