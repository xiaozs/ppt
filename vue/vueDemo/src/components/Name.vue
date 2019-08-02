<template>
    <div id="app">
        <!-- 这里添加组件的模板 -->
        <div>{{familyName + name + age}}</div>
        <div @click="clickName">{{fullName + age}}</div>

        <input type="text" :value="name" @input="onNameChange" />
    </div>
</template>

<script>
export default {
    props: {
        // 组件的属性，相当于组件的配置值、输入值
        age: {
            type: Number,
            default: 0
        }
    },
    data() {
        // 组件的内部状态值，被保存在一个对象里面
        return {
            familyName: "王",
            name: "二小"
        };
    },
    computed: {
        // 计算属性，之后会有更深入的介绍
        fullName() {
            return this.familyName + this.name;
        }
    },
    methods: {
        onNameChange(e) {
            this.name = e.data;
        },
        // 在这里写组件的方法
        // 组件的方法不仅可以被组件自己调用，组件外也可以调用
        clickName() {
            alert(`你好，我是${this.fullName}, 姓${this.familyName}，名${this.name}，今年${this.age}岁`);
        }
    },
    watch: {
        // 设置属性监听器，之后会有更深入的介绍
    },
};
</script>

<style>
/* 这里填写组件的样式 */
</style>
