import { createApp } from './app'

export default context => {
    // 有可能是异步路由钩子函数或组件，所以将返回一个Promise
    // 以便服务器能够等待所有的内容在渲染前 就已经准备就绪
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()

        router.push(context.url)

        // 等到 router 将可能的异步组件和钩子函数解析完
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            console.log('entry-server.js ----- matchedComponents',matchedComponents.toString());
            if (!matchedComponents.length){
                return reject({ code: 404 })
            }
            // 对所有匹配的路由组件调用 asyncData
            Promise.all(matchedComponents.map(Component => {
                if(Component.asyncData){
                    return Component.asyncData({
                        store,
                        router: router.currentRoute
                    })
                }
            })).then(() => {
                // 在所有预取钩子 resolve后， store已经填充渲染应用程序所需的状态
                // 将状态附加到上下文 
                // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
                context.state = store.state

                resolve(app)
            }).catch(reject)
        }, reject)
    })
}