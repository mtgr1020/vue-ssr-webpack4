import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
import './assets/common.css'
import '@node_modules/font-awesome/css/font-awesome.min.css'

export function createApp () {
    // 创建router 和 store 实例
    const router = createRouter()
    const store = createStore()

    sync(store, router)

    const app = new Vue({
        // 注入router 到跟 vue实例
        router,
        store,
        render: h => h(App)
    })

    return { app, router, store }
}