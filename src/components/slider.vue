<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div :class="class_" v-for="(imgObj, i) in imgs" :key="i" :style="cardStyle" @click="pushCart(imgObj, i)">
          <div class="row center" :style="imgStyle">
            <img :src="imgObj.data" :style="imgObj.picked && !isCart ? `opacity: 0.2;` : ''" />
          </div>
          <div class="row">
            <div :style="priceStyle()">{{price(imgObj.name)}}</div>
          </div>
          <div class="row" style="margin-bottom: 10px;">
            <div :style="fontSize()">Color: </div>
            <info-color v-for="color in colors(imgObj.name)" :key="color.hex" :xs="xs" :hex="color.hex" />
          </div>
          <div class="row">
            <div :style="fontSize()">Size: </div>
            <info-size v-for="size in sizes(imgObj.name)" :key="size" :infos="infos" :name="imgObj.name" :size="size" :xs="xs" />
          </div>
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
import infoColor from '@/components/info-color.vue'
import infoSize from '@/components/info-size.vue'

export default {
  name: 'slider',
  props: ['imgs', 'isCart'],
  components: { 'info-color': infoColor, 'info-size': infoSize },
  created() {
    this.p = this.xs ? 30 : 45
    this.m = this.xs ? 5 : 10
  },
  mounted() {
    if (!this.xs) this.class_ = 'swiper-slide card'
    this.$nextTick(() => {
      this.swiper = new Swiper('.swiper-container', this.op)
    })
  },
  data() {
    return {
      class_: 'swiper-slide-xs card',
    }
  },
  watch: {},
  methods: {
    pushCart(imgObj, i) {
      imgObj.picked = !imgObj.picked
      if (imgObj.picked) this.$store.commit('image/pushCart', i)
      else this.$store.commit('image/spliceCart', imgObj.name)
    },
    fontSize() {
      let s = this.xs ? 15 : 20
      return `font-size:${s}px`
    },
    sizes(name) {
      return this.infos.find(info => info.name === name).sizes
    },
    priceStyle() {
      const s = this.xs ? 25 : 45
      const m = this.xs ? 5 : 0
      return `font-family: 'Oswald', sans-serif;font-size:${s}px;margin-bottom:${m}px;`
    },
    price(name) {
      return this.infos.find(info => info.name === name).price + '.000đ'
    },
    colors(name) {
      return this.infos.find(info => info.name === name).colors
    },
  },
  computed: {
    xs: {
      get() {
        return this.$store.state.image.xs
      },
    },
    op: {
      get() {
        return this.$store.state.image.op
      },
    },
    cardStyle: {
      get() {
        return this.$store.state.image.cardStyle
      },
    },
    imgStyle: {
      get() {
        return this.$store.state.image.imgStyle
      },
    },
    infos: {
      get() {
        return this.$store.state.item.setInfos
      },
    },
  },
  beforeDestroy() {
    this.swiper.destroy(true, true)
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald:700');

.picked {
  background-color: rgba(255, 255, 255, 0.85);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
  font-size: 17pt;
  border-radius: 20px;
}

.swiper-slide-active-xs {
  transition: all 0.5s ease-in-out;
  transform: scale(1.5);
}

.card {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  background-size: contain;
  background-repeat: no-repeat;
}

.swiper-slide-xs {
  margin: 100px 0px 110px 0px;
}

.swiper-slide {
  margin: 10px 0px 30px 0px;
}

.card img {
  border-radius: 12px;
  width: 100%;
  height: 100%;
}
</style>
