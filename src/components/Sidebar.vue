<template>
  <div class="bl_sidebar">
    <button @click="searchLocation('tokyo')">tokyo</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'sidebar',
  data() {
    return {}
  },
  methods: {
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
</style>
