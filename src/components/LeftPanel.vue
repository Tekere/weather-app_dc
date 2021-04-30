<template>
  <div class="bl_leftCont">
    <div class="bl_leftCont_btn_unit">
      <a href="" class="el_search_btn">Search for places</a>
      <a href="" class="el_currentLocation"
        ><svg
          enable-background="new 0 0 24 24"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" />
          <path
            d="m23 11h-1.051c-.47-4.717-4.232-8.479-8.949-8.949v-1.051c0-.552-.447-1-1-1s-1 .448-1 1v1.051c-4.717.47-8.479 4.232-8.949 8.949h-1.051c-.553 0-1 .448-1 1s.447 1 1 1h1.051c.471 4.717 4.232 8.479 8.949 8.949v1.051c0 .552.447 1 1 1s1-.448 1-1v-1.051c4.717-.471 8.479-4.232 8.949-8.949h1.051c.553 0 1-.448 1-1s-.447-1-1-1zm-10.014 8.933c-.036-.519-.457-.933-.986-.933s-.95.414-.986.933c-3.622-.448-6.498-3.324-6.946-6.946.519-.037.932-.459.932-.987s-.413-.95-.933-.986c.448-3.622 3.324-6.498 6.946-6.946.037.518.458.932.987.932s.95-.414.986-.933c3.622.448 6.498 3.324 6.946 6.946-.519.037-.932.459-.932.987s.413.95.933.986c-.449 3.623-3.324 6.498-6.947 6.947z"
          /></svg
      ></a>
    </div>
    <div class="bl_leftCont_weatherInfo">
      <div class="bl_leftCont_img_wrapper">
        <img src="/images/clear.png" alt="" />
      </div>
      <div class="bl_leftCont_temperature">
        <p>15<span>℃</span></p>
      </div>
      <div class="bl_leftCont_weatherTxt">
        <p>Shower</p>
      </div>
    </div>
    <div class="bl_leftCont_subInfo">
      <div class="bl_leftCont_date">
        <p><span>Today</span> Fri, 5 Jun</p>
      </div>
      <div class="bl_leftCont_place">
        <p>Helsinki</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss">
.bl_leftCont {
  height: 100%;
  background-color: #1e213a;
  color: #fff;
}
.bl_leftCont_btn_unit {
  padding: 2rem 1.5rem;
}
.el_search_btn {
  display: inline-block;
  background-color: #6e707a;
  color: #e7e7eb;
  height: 40px;
  line-height: 40px;
  padding: 0 1.1rem;
}
.el_currentLocation {
  background-color: #6e707a;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  svg {
    fill: #e7e7eb;
  }
}
.bl_leftCont_weatherInfo {
  padding-bottom: 10%;
  .bl_leftCont_img_wrapper {
    position: relative;
    height: 40vh;
    &::before {
      content: '';
      position: absolute;
      // display: block;
      height: 40vh;
      width: 100%;
      background: url('/images/cloud_background.png') no-repeat center
        center/cover;
      opacity: 0.1;
    }
    img {
      width: 30%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .bl_leftCont_temperature {
    padding-bottom: 20%;
    font-size: 6rem;
    text-align: center;
    span {
      display: inline-block;
      font-size: 4.5rem;
      color: #a09fb1;
    }
  }
  .bl_leftCont_weatherTxt {
    font-size: 2rem;
    font-weight: 700;
    color: #a09fb1;
    text-align: center;
  }
}
.bl_leftCont_subInfo {
  .bl_leftCont_date {
    padding-bottom: 10%;
    font-size: 1.2rem;
    font-weight: 500;
    color: #a09fb1;
    text-align: center;
  }
  .bl_leftCont_place {
    font-size: 1.2rem;
    font-weight: 400;
    color: #a09fb1;
    text-align: center;
  }
}
</style>
