<template>
    <div>
        姓：
        <input type="text" v-model="familyName" />
        名：
        <input type="text" v-model="name" />
        <hr />
        全名：{{fullName}}
        <button @click="cleanName">清空名</button>
    </div>
</template>
<script>
export default {
    data() {
        // 这里取得初始值
        let familyName = "xiao";
        let name = "zs"

        return {
            familyName: familyName,
            name: name
        }
    },
    watch: {
        fullName(val) {
            if (val === "xiaozs") {
                console.log("你可真是个天才")
            }
        }
    },
    computed: {
        fullName() {
            return this.familyName + this.name;
        }
    },
    methods: {
        cleanName() {
            this.name = "";
        }
    }
}
</script>
