<template>
  <div class="bl_sidebar">
    <div class="bl_sidebar_exit">
      <button @click="toggleIsOpenSidebar">×</button>
    </div>

    <div class="bl_sidebar_search_wrapper">
      <input v-model="searchTxt" type="text" placeholder="search location" />
      <input
        @click.prevent="searchLocationByChar(searchTxt)"
        type="button"
        value="search"
      />
    </div>

    <div v-if="searchTxt.length > 0" class="bl_sidebar_searchResult">
      <ul class="bl_sidebar_searchResult_list">
        <li
          v-for="resultItem in searchResult"
          :key="resultItem.woeid"
          class="bl_sidebar_searchResult_item"
        >
          <a @click.prevent="clickCity(resultItem)" href="">{{
            resultItem.title
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import axios from 'axios'

export default defineComponent({
  name: 'sidebar',
  data() {
    return {
      searchTxt: '',
      searchResult: [],
      gotData: false,
    }
  },
  watch: {
    searchTxt(val) {
      if (val.length === 0) {
        this.searchResult = []
      }
    },
  },
  methods: {
    ...mapActions(['toggleIsOpenSidebar']),
    searchLocationByChar(location: string): void {
      if (location.length > 0) {
        axios
          .get(
            'https://ancient-inlet-04652.herokuapp.com/https://www.metaweather.com/api/location/search/?query=' +
              location
          )
          .then((res) => {
            this.searchResult = res.data
          })
      }
    },

    clickCity(city) {
      this.$emit('click-city', city)
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
.bl_sidebar_exit {
  padding: 2rem 1.5rem 0;
  text-align: right;
  button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
  }
}
.bl_sidebar_search_wrapper {
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  input[type='text'] {
    padding: 0.5rem;
    width: 60%;
    background-color: transparent;
    border: 1px solid #e7e7eb;
    color: #fff;
    &:focus {
      outline: 0;
    }
  }
  input[type='button'] {
    width: 25%;
    padding: 0.5rem;
    background-color: #3c47e9;
    color: #fff;
    border: none;
    cursor: pointer;
  }
}

.bl_sidebar_searchResult {
  .bl_sidebar_searchResult_list {
    padding: 1rem 1.5rem;
    height: 75vh;
    overflow-y: auto;
  }
  .bl_sidebar_searchResult_item {
    a {
      display: block;
      padding: 1rem;
      color: #fff;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid #fff;
      }
    }
  }
}
</style>
