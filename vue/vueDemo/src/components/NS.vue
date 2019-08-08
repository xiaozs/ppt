<template>
    <div>
        <div v-if="isSpecial">特殊页面</div>
        <div v-else>{{normal}}-{{$route.params.normal}}</div>
    </div>
</template>
<script>
export default {
    computed: {
        normal() {
            return this.$route.params.normal;
        },
        isSpecial() {
            return this.$route.path === "/test/special";
        }
    }
}
</script>