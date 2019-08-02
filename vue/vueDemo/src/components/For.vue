<template>
    <ul>
        <li v-for="(item, index) in items">
            {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            parentMessage: 'Parent',
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }
    }
};
</script>

<style>
/* 这里填写组件的样式 */
</style>
