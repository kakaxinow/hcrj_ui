<template>
    <div class="tabs-item" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-item",
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        inject: ['eventBus'],
        created() {
            //console.log('爷爷给孙子到eventbBus');
            this.eventBus.$on("update:selected", name => {
                console.log(name);
            })
        },
        methods: {
            xxx() {
                this.eventBus.$emit("update:selected", this.name);
            }
        }
    }
</script>

<style scoped>
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
    }
</style>