<template>
    <div>
        <template v-if="flag">
            true
        </template>
        <template v-else>
            false
        </template>
            
        <button @click="toggle">toggle</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: true
        }
    },
    methods: {
        toggle() {
            this.flag = !this.flag;
        }
    }
};
</script>

<style>
/* 这里填写组件的样式 */
</style>
