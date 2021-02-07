<template>
  <div class="layout">
    <sidebar 
      class="sidebar-container"
      :style="{ width: sidebarWidth + 'px' }"
    ></sidebar>
    <div 
      class="main-container"
      :style="{ width: mainWidth + 'px' }"
    >
      <div class="header">顶部</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Sidebar } from './components'
export default {
  data () {
    return {
      sidebarWidth: 200
    }
  },
  components: {
    Sidebar
  },
  computed: {
    mainWidth () {
      return document.documentElement.clientWidth - this.sidebarWidth
    }
  },
  mounted () {
    console.log()
  }
};
</script>

<style lang="less" scoped>
.layout {
  display: flex;

}
</style>