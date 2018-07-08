<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <card-simple :class="class_" v-for="card in cards" :key="card.name" :card="card" :isSlider="true" />
    </div>
    <div v-if="!xs" class="swiper-button-prev" slot="button-prev"></div>
    <div v-if="!xs" class="swiper-button-next" slot="button-next"></div>
    <div v-if="!xs" class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/dist/js/swiper.esm.js'
Swiper.use([Navigation, Pagination, Keyboard, Mousewheel])
import 'swiper/dist/css/swiper.min.css'
import cardSimple from '@/components/card-simple.vue'

export default {
  name: 'slider',
  props: ['cards', 'isCart', 'op'],
  components: { 'card-simple': cardSimple },
  created() {
    this.xs = window.innerWidth < 769
  },
  mounted() {
    if (!this.xs) this.class_ = 'swiper-slide'
    this.$nextTick(() => {
      this.swiper = new Swiper('.swiper-container', this.op)
    })
  },
  data() {
    return {
      class_: 'swiper-slide-xs',
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
  max-width: 1200px;
}
.swiper-slide-active-xs {
  transition: all 0.5s ease-in-out;
  transform: scale(1.7);
}

.swiper-slide-xs {
  margin: 130px 0px 140px 0px;
}

.swiper-slide {
  margin: 10px 0px 30px 0px;
}
</style>
