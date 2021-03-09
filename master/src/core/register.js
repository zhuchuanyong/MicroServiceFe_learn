import {
    registerMicroApps, // 注册子应用
    runAfterFirstMounted, // 第一个子应用装载完毕
    setDefaultMountApp, // 设置默认装载子应用
    start // 启动
} from "qiankun";
import Vue from "vue";
import App from "../App.vue";

import router from '../router'
console.log('AAAAAA')
let app = null;
function render ({ appContent, loading }) {
    if (!app) {
        app = new Vue({
            el: '#main-container',
            router,
            data () {
                return {
                    content: appContent,
                    loading,
                };
            },
            render (h) {
                return h(App, {
                    props: {
                        content: this.content,
                        loading: this.loading,
                    },
                })
            }
        });
    } else {
        app.content = appContent;
        app.loading = loading;
    }
}

function initApp () {
    render({ appContent: '', loading: false });
}


initApp();


function genActiveRule (routerPrefix) {
    return location => location.pathname.startsWith(routerPrefix);
};

registerMicroApps(
    [
        {
            name: 'vue-aaa', // app name registered
            entry: '//localhost:7100',
            render,
            activeRule: genActiveRule("/aaa"),
        },
        {
            name: 'vue bbb',
            entry: '//localhost:7101',
            render,
            activeRule: genActiveRule("/bbb"),
        },
    ],
    {
        // 挂载前回调
        beforeLoad: [
            app => {
                console.log("before load", app);
            }
        ],

        // 挂载后回调
        beforeMount: [
            app => {
                console.log("before mount", app);
            }
        ],

        // 卸载后回调
        afterUnmount: [
            app => {
                console.log("after unload", app);
            }
        ]
    }
);

setDefaultMountApp("/aaa");

runAfterFirstMounted(() => console.info("first app mounted"));

// 启动微服务
start();