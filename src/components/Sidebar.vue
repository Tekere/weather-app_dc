<template>
  <div class="bl_sidebar">
    <div class="bl_sidebar_exit">
      <button @click="toggleIsOpenSidebar">X</button>
    </div>
    <!-- <button @click="searchLocation('tokyo')">tokyo</button> -->
    <div class="bl_sidebar_search_wrapper">
      <input type="text" />
      <input type="submit" />
    </div>
    <div class="bl_sidebar_registeredTown"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import axios from 'axios'

export default defineComponent({
  name: 'sidebar',
  data() {
    return {}
  },
  methods: {
    ...mapActions(['toggleIsOpenSidebar']),
    searchLocation(location: string): void {
      console.log(
        'https://www.metaweather.com/api/location/search/?query=' + location
      )
      axios
        .get(
          'https://ancient-inlet-04652.herokuapp.com/https://www.metaweather.com/api/location/search/?query=san'
        )
        .then((res) => {
          console.log(res)
        })
    },
  },
})
</script>

<style lang="scss">
.bl_sidebar {
  height: 100%;
  background-color: #1e213a;
  color: #fff;
}
</style>
