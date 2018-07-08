<template>
  <div class="card" :style="cardStyle">
    <div class="row center" :style="imgStyle">
      <img :src="imgObj.data" :style="imgObj.picked && !isCart ? `opacity: 0.2;` : ''" />
    </div>
    <card-price :name="imgObj.name" />
    <card-color :name="imgObj.name" />
    <card-size :name="imgObj.name" />
  </div>
</template>

<script>
import cardColor from '@/components/card-color.vue'
import cardSize from '@/components/card-size.vue'
import cardPrice from '@/components/card-price.vue'

export default {
  name: 'Card',
  props: ['imgObj', 'isCart'],
  components: { 'card-color': cardColor, 'card-size': cardSize, 'card-price': cardPrice },
  created() {},
  mounted() {},
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
  },
  computed: {
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
  },
  beforeDestroy() {},
}
</script>

<style scoped>
</style>
