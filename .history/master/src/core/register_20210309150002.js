import {
    registerMicroApps, // 注册子应用
    runAfterFirstMounted, // 第一个子应用装载完毕
    setDefaultMountApp, // 设置默认装载子应用
    start // 启动
} from "qiankun";


registerMicroApps([
    {
      name: 'vue-aaa', // app name registered
      entry: '//localhost:7100',
      container: '#Container',
      activeRule: '/aaa',
    },
    {
      name: 'vue bbb',
      entry: '//localhost:7101',
      container: '#Container',
      activeRule: '/bbb',
    },
  ]);