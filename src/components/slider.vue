<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div :class="class_" v-for="(imgObj, i) in imgs" :key="i" :style="cardStyle">
          <div class="info bottom" :style="cardStyle">
            <div v-for="color in infos[i].colors" :key="color.hex" class="color" :style="`background-color:${color.hex}; padding: 20px; margin: 5px; border-radius: 5px`"></div>
          </div>
          <img :src="imgObj.data" :style="cardStyle" />
        </div>
      </div>
      <div v-if="!xs" class="swiper-button-prev" slot="button-prev"></div>
      <div v-if="!xs" class="swiper-button-next" slot="button-next"></div>
      <div v-if="!xs" class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/dist/js/swiper.esm.js'
Swiper.use([Navigation, Pagination, Keyboard, Mousewheel])
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'slider',
  props: ['op', 'imgs', 'xs', 'cardStyle', 'infos'],
  components: {},
  created() {},
  mounted() {
    if (!this.xs) this.class_ = 'swiper-slide card'
    const swiper = new Swiper('.swiper-container', this.op)
    console.log(swiper)
    console.log(this.infos)
  },
  data() {
    return {
      class_: 'swiper-slide-xs card',
    }
  },
  watch: {},
  methods: {},
  computed: {},
  beforeDestroy() {},
}
</script>

<style scoped>
.slider {
  position: relative;
}

.info {
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;
}

.bottom {
  bottom: 0;
  max-height: 15% !important;
  width: 100%;
}

.swiper-slide-active-xs {
  transition: all 0.5s ease-in-out;
  transform: scale(1.5);
}

.card {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}

.swiper-slide-xs {
  margin: 100px 0px;
}

.swiper-slide {
  margin: 30px 0px;
}

.card img {
  border-radius: 12px;
}
</style>
