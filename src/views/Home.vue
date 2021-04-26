<template>
  <div class="home ly_page">
    <div class="ly_left">
      <sidebar></sidebar>
    </div>
    <div class="ly_right"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '@/components/Sidebar.vue';
export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
  },
});
</script>
<style lang="scss">
.ly_left {
  width: 30%;
}
</style>
