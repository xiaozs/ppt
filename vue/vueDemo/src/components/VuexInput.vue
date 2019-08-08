<template>
    <input v-model="value" type="text" />
</template>

<script>
export default {
    computed: {
        // 通过computed声明一个计算属性
        // get、set分别访问 this.$store.state.value
        value: {
            get() {
                return this.$store.state.value;
            },
            set(value) {
                // 通过commit来调用store的“方法”
                this.$store.commit("changeValue", value);
            }
        }
    }
}
</script>

