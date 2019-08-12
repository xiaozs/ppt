<template>
    <div>
        <select v-model="province">
            <option v-for="it in provinces.data" :key="it.value" :value="it.value">{{it.province}}</option>
        </select>
        <select v-model="city">
            <option v-for="it in cities.data" :key="it.value" :value="it.value">{{it.city}}</option>
        </select>
    </div>
</template>
<script>
import dataSource from "@/utils/dataSource";

function getProvinces() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([{
                value: "1",
                province: "北京市"
            }, {
                value: "2",
                province: "广东省"
            }])
        }, 1000);
    })
}

function getCities(provinceCode) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (provinceCode === "1") {
                resolve([{
                    value: "1-1",
                    city: "北京市"
                }])
            }
            if (provinceCode === "2") {
                resolve([{
                    value: "2-1",
                    city: "广州市"
                }, {
                    value: "2-2",
                    city: "深圳市"
                }])
            }
            resolve([]);
        }, 1000)
    });
}

export default {
    data() {
        return {
            province: "",
            city: "",
        }
    },
    watch: {
        province() {
            this.city = "";
        }
    },
    computed: {
        provinces() {
            return dataSource({
                dataGetter: async () => {
                    return await getProvinces();
                },
                initData: []
            });
        },
        cities() {
            return dataSource({
                dataGetter: async () => {
                    return await getCities(this.province);
                },
                initData: []
            });
        }
    }
}
</script>

