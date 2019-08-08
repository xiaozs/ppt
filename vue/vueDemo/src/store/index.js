import Vue from 'vue'
import Vuex, { Store } from "vuex";

// 让所有vue对象可以通过$store属性访问store
Vue.use(Vuex);

// 一整个应用只能有一个store对象
export default new Store({

    // 相当于Vue对象里面的data
    state: {
        value: ""
    },

    // 相当于Vue对象里面的methods，但是只能写同步方法
    mutations: {
        changeValue(state, value) {
            state.value = value;
        }
    },

    // 相当于Vue对象里面的methods，但是只能写异步方法
    actions: {

    },

    // 相当于Vue对象里面的computed，但是只能写getter
    getters: {

    }
})