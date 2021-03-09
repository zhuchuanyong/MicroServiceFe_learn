    <template>
        <div id="root" class="main-container">
            <div class="main-container-menu">
                
            </div>
        <!-- 子应用盒子 -->
        <div id="root-view" class="app-view-box" v-html="content"></div>
    </div>
    </template>

    <script>
    export default {
        name: "root-view",
        props: {
            loading: Boolean,
            content: String 
        }
    };
    </script

作者：春深是蔚蓝
链接：https://juejin.cn/post/6844904042427056142
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。