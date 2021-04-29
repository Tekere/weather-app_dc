<template>
  <div class="home ly_page">
    <div class="ly_left">
      <sidebar v-if="isOpenSidebar"></sidebar>
      <left-panel v-else></left-panel>
    </div>
    <div class="ly_right">
      <div class="bl_rightCont"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import LeftPanel from '@/components/LeftPanel.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
    LeftPanel,
  },
  data() {
    return {
      isOpenSidebar: false,
    }
  },
})
</script>
<style lang="scss">
.ly_left {
  height: 100vh;
  width: 27%;
}
.ly_right {
  overflow-y: auto;
}
</style>
