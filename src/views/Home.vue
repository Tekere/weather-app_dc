<template>
  <div class="home ly_page">
    <div class="ly_left">
      <sidebar v-if="isOpenSidebar"></sidebar>
      <left-panel v-else></left-panel>
    </div>
    <div class="ly_right">
      <div class="bl_rightCont">
        <div class="bl_card_unit">
          <div class="bl_card bl_card__s">
            <div class="bl_card_head">
              <p>Tomorrow</p>
            </div>
            <div class="bl_card_main">
              <img src="/images/clear.png" alt="" />
            </div>
            <div class="bl_card_info">
              <p>16</p>
              <p>11</p>
            </div>
          </div>
          <div class="bl_card bl_card__s">
            <div class="bl_card_head">
              <p>Tomorrow</p>
            </div>
            <div class="bl_card_main">
              <img src="/images/clear.png" alt="" />
            </div>
            <div class="bl_card_info">
              <p>16</p>
              <p>11</p>
            </div>
          </div>
          <div class="bl_card bl_card__s">
            <div class="bl_card_head">
              <p>Tomorrow</p>
            </div>
            <div class="bl_card_main">
              <img src="/images/clear.png" alt="" />
            </div>
            <div class="bl_card_info">
              <p>16</p>
              <p>11</p>
            </div>
          </div>
          <div class="bl_card bl_card__s">
            <div class="bl_card_head">
              <p>Tomorrow</p>
            </div>
            <div class="bl_card_main">
              <img src="/images/clear.png" alt="" />
            </div>
            <div class="bl_card_info">
              <p>16</p>
              <p>11</p>
            </div>
          </div>
          <div class="bl_card bl_card__s">
            <div class="bl_card_head">
              <p>Tomorrow</p>
            </div>
            <div class="bl_card_main">
              <img src="/images/clear.png" alt="" />
            </div>
            <div class="bl_card_info">
              <p>16</p>
              <p>11</p>
            </div>
          </div>
        </div>
      </div>
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
.ly_page {
  display: flex;
}
.ly_left {
  height: 100vh;
  width: 27%;
  position: sticky;
  top: 0;
}
.ly_right {
  overflow-y: auto;
  width: 73%;
  min-height: 100vh;
  background-color: #100e1d;
  padding: 4rem;
}
.bl_card_unit {
  display: flex;
  justify-content: space-between;
}
.bl_card {
  padding: 1rem;
  background-color: #1e213a;
  color: #fff;
}
</style>
