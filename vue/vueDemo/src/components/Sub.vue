<template>
    <div>
        <input v-bind="{ ...$attrs, ...$props }" v-on="$listeners" type="text" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputData: ""
        }
    }
}
</script>

