<template>
  <div v-if="isLoading" class="bl_loading"><p>Loading...</p></div>
  <div v-else class="home ly_page">
    <div class="ly_left">
      <transition name="" mode="">
        <sidebar
          v-if="isOpenSidebar"
          @click-city="selectCity"
          ref="side"
        ></sidebar>
        <left-panel
          v-else
          :today-weather="todayWeather"
          :city-name="cityName"
          :today="today"
          @click-current-location="getLocationCoordinates"
        ></left-panel>
      </transition>
    </div>
    <div class="ly_right">
      <div class="bl_rightCont">
        <div class="bl_card_unit .bl_card_unit__s bl_card_unit__mb">
          <div
            v-for="weather in weekWeather"
            :key="weather.id"
            class="bl_card bl_card__s"
          >
            <div class="bl_card_head">
              <p>{{ formatApplicableDate(weather.applicable_date) }}</p>
            </div>
            <div class="bl_card_main">
              <img
                :src="
                  '/images/' +
                  weather.weather_state_name.replace(/\s+/g, '') +
                  '.png'
                "
                alt=""
              />
            </div>
            <div class="bl_card_info">
              <p>{{ formatToInteger(weather.max_temp) }}℃</p>
              <p>{{ formatToInteger(weather.min_temp) }}℃</p>
            </div>
          </div>
        </div>
        <div class="bl_ttl">
          <h2>Today’s Highlights</h2>
        </div>
        <div class="bl_card_unit bl_card_unit__wrap">
          <div class="bl_card bl_card__l">
            <div class="bl_card_head">
              <p>Wind speed</p>
            </div>
            <div class="bl_card_main">
              <p>
                {{ formatToInteger(todayWeather.wind_speed) }}<small>mph</small>
              </p>
            </div>
            <div class="bl_card_info"></div>
          </div>
          <div class="bl_card bl_card__l">
            <div class="bl_card_head">
              <p>Humidity</p>
            </div>
            <div class="bl_card_main">
              <p>{{ todayWeather.humidity }}<small>%</small></p>
            </div>
            <div class="bl_card_info"></div>
          </div>
          <div class="bl_card bl_card__l">
            <div class="bl_card_head">
              <p>visibility</p>
            </div>
            <div class="bl_card_main">
              <p>
                {{ formatToInteger(todayWeather.visibility)
                }}<small>miles</small>
              </p>
            </div>
          </div>
          <div class="bl_card bl_card__l">
            <div class="bl_card_head">
              <p>Air Pressure</p>
            </div>
            <div class="bl_card_main">
              <p>
                {{ formatToInteger(todayWeather.air_pressure)
                }}<small>mb</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
import Sidebar from '@/components/Sidebar.vue'
import LeftPanel from '@/components/LeftPanel.vue'

const today = moment().format('ddd, D MMMM')

// interface
interface Data {
  isLoading: boolean
  weekWeather: any[]
  cityName: string
  today: string
}
export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
    LeftPanel,
  },
  data() {
    return {
      isLoading: true,
      weekWeather: [],
      cityName: 'Tokyo',
      today,
    } as Data
  },
  computed: {
    ...mapGetters(['isOpenSidebar']),
    todayWeather(): any {
      return this.weekWeather[0]
    },
  },
  created() {
    this.getWeather()
  },
  methods: {
    ...mapActions(['toggleIsOpenSidebar']),
    getWeather(targetLocation = '1118370'): void {
      this.isLoading = true
      axios
        .get(
          'https://ancient-inlet-04652.herokuapp.com/https://www.metaweather.com/api/location/' +
            targetLocation
        )
        .then((res) => {
          this.weekWeather = res.data.consolidated_weather
        })
        .then(() => {
          this.isLoading = false
        })
    },
    formatApplicableDate(date: string): string {
      return moment(date).format('M月D日')
    },
    formatToInteger(temp: number): number {
      return Math.floor(temp)
    },
    selectCity({ title, woeid }): void {
      this.getWeather(woeid)
      this.cityName = title
      this.toggleIsOpenSidebar()
    },
    getLocationCoordinates(): void {
      this.isLoading = true
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude //緯度を取得して定数latに代入
          const lng = pos.coords.longitude //経度を取得して定数lngに代入
          axios
            .get(
              'https://ancient-inlet-04652.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=' +
                lat +
                ',' +
                lng
            )
            .then((res) => {
              this.getWeather(res.data[0].woeid)
              this.cityName = res.data[0].title
            })
        },
        () => {
          console.log('error')
        }
      )
    },
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
  overflow: auto;

  &.bl_card_unit__mb {
    margin-bottom: 2rem;
  }
}
.bl_card_unit__wrap {
  flex-wrap: wrap;
}
.bl_card {
  box-sizing: border-box;
  padding: 1rem;
  background-color: #1e213a;
  color: #fff;

  .bl_card_head {
    text-align: center;
  }
  .bl_card_main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    img {
      width: 50%;
    }
    p {
      font-size: 4rem;
      font-weight: bold;
      small {
        font-size: 1.8rem;
        font-weight: normal;
        padding-left: 0.3rem;
      }
    }
  }
  .bl_card_info {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
}
.bl_card__s {
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
  .bl_card_main {
    height: 40%;
  }
}
.bl_card__l {
  width: 48%;
  margin-bottom: 1.5rem;
}

.bl_ttl {
  padding: 1rem 0;
  h2 {
    font-size: 24px;
    color: #fff;
    font-weight: bold;
  }
}

@media (max-width: 1100px) {
  .ly_page {
    flex-direction: column;
  }
  .ly_left {
    position: inherit;
    width: 100%;
    height: 90vh;
  }
  .ly_right {
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
  }
  .bl_card__l {
    width: 100%;
  }
  .bl_card .bl_card_main p {
    font-size: 2rem;
  }

  .bl_ttl {
    h2 {
      font-size: 20px;
    }
  }
}
.bl_loading {
  background-color: #100e1d;
  position: relative;
  height: 100vh;
  width: 100vw;
  p {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
