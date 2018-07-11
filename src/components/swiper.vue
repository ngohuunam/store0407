<template>
  <div class="swiper-container" :style="`height:${swiperH}px;`">
    <div class="swiper-wrapper">
      <card-simple ref="card" class="swiper-slide" v-for="card in cards" :key="card.name" :card="card" />
    </div>
    <div v-if="!xs" class="swiper-button-prev" slot="button-prev"></div>
    <div v-if="!xs" class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { Swiper, Navigation } from 'swiper/dist/js/swiper.esm.js'
Swiper.use([Navigation])
import 'swiper/dist/css/swiper.min.css'
import cardSimple from '@/components/card-simple.vue'

export default {
  name: 'slider',
  props: ['cards'],
  components: { 'card-simple': cardSimple },
  created() {
    this.xs = window.innerWidth < 768
    this.xl = window.innerWidth > 1024
  },
  mounted() {
    this.$nextTick(() => {
      this.height = this.$refs.card[0].$el.clientHeight
      this.space = window.innerWidth * (this.xl ? 0.09 : 0.25)
      console.log(this.space)
      // this.swiperH = this.height * (this.xl ? 1.15 : 2.15)
      this.swiperH = this.height * 2.15
      const op = {
        slidesPerView: 'auto',
        spaceBetween: this.space,
        centeredSlides: true,
        speed: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
      this.swiper = new Swiper('.swiper-container', op)
      // console.log(this.swiper)
    })
  },
  data() {
    return {
      swiperH: 0,
    }
  },
  watch: {},
  methods: {
    pushCart(imgObj, i) {
      imgObj.picked = !imgObj.picked
      if (imgObj.picked) this.$store.commit('image/pushCart', i)
      else this.$store.commit('image/spliceCart', imgObj.name)
    },
  },
  computed: {},
  beforeDestroy() {
    this.swiper.destroy(true, true)
  },
}
</script>

<style scoped>
.swiper-container {
  max-width: 1220px;
  display: flex;
  align-items: center;
}
.swiper-wrapper {
  height: auto;
}
.swiper-slide-prev,
.swiper-slide-active,
.swiper-slide-next {
  transition: all 0.5s ease-in-out;
}
.swiper-slide-active {
  transform: scale(2);
}
</style>
