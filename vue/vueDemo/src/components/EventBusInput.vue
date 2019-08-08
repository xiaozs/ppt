<template>
    <input v-model="value" type="text" />
</template>

<script>
export default {
    computed: {
        // 通过computed声明一个计算属性
        // get、set分别访问 this.$eventBus.value
        value: {
            get() {
                return this.$eventBus.value;
            },
            set(value) {
                this.$eventBus.value = value;
            }
        }
    }
}
</script>

