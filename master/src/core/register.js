import {
    registerMicroApps, // 注册子应用
    runAfterFirstMounted, // 第一个子应用装载完毕
    setDefaultMountApp, // 设置默认装载子应用
    start // 启动
} from "qiankun";

function genActiveRule(routerPrefix) {
    return location => location.pathname.startsWith(routerPrefix);
  };

registerMicroApps(
    [
        {
            name: 'vue-aaa', // app name registered
            entry: '//localhost:7100',
            container: '#Container',
            activeRule: genActiveRule("/aaa"),
        },
        {
            name: 'vue bbb',
            entry: '//localhost:7101',
            container: '#Container',
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