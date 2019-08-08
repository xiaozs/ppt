<template>
    <div>{{normal}}-{{$route.params.normal}}</div>
</template>
<script>
export default {
    computed: {
        normal() {
            return this.$route.params.normal;
        }
    }
}
</script>
