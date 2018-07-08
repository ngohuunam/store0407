<template>
  <div class="card" :style="cardStyle">
    <div class="row center" :style="imgStyle">
      <img :src="card.base64" />
    </div>
    <card-price :price="card.info.price" />
    <card-color :hexs="card.info.hexs" />
    <card-size :sizes="card.info.sizes" :quantity="card.info.quantity" />
  </div>
</template>

<script>
import cardColor from '@/components/card-color.1.vue'
import cardPrice from '@/components/card-price.1.vue'
import cardSize from '@/components/card-size.1.vue'

export default {
  name: 'Card',
  props: ['card', 'isSlider'],
  components: { 'card-color': cardColor, 'card-price': cardPrice, 'card-size': cardSize },
  created() {},
  mounted() {},
  data() {
    return {}
  },
  watch: {},
  methods: {},
  computed: {
    cardStyle: {
      get() {
        return this.$store.state.card.cardStyle
      },
    },
    imgStyle: {
      get() {
        return this.$store.state.card.imgStyle
      },
    },
  },
  beforeDestroy() {},
}
</script>

<style scoped>
</style>
