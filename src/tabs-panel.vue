<template>
    <div class="tabs-panel" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-panel",
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            name: {
                type: String | Number,
                required: true
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        },
        created() {
            this.eventBus.$on("update:selected", name => {
                if (name === this.name) {
                    console.log(`panel${this.name}被选中`);
                    this.active = true;
                } else {
                    console.log(`panel${this.name}未被选中`);
                    this.active = false;
                }
            });
        }
    }
</script>

<style scoped lang="scss">
    .tabs-panel {
        &.active {
            background-color: red;
        }
    }
</style>