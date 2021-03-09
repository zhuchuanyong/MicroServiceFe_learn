<template>
  <div id="root" class="main-container">
    <div class="main-container-menu">
       <router-link to="/aaa">app-vue-aaa</router-link>
      <router-link to="/bbb">app-vue-bbb</router-link>
    </div>
    <!-- 子应用盒子 -->
     <div v-if="loading" class="loading">loading</div>
    <div id="root-view" class="app-view-box" v-html="content"></div>
  </div>
</template>
<script>
export default {
  name: "root-view",
  props: {
    loading: Boolean,
    content: String,
  },
};
</script>
