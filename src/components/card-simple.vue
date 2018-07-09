<template>
  <div class="card" style="padding: 1.5% 0px">
    <div class="row end" :style="_imgStyle(card.base64)">
      <!-- <img :src="card.base64" /> -->
      <div>
        <card-price v-if="ratio < 1.779" :price="card.info.price" />
        <card-color v-if="ratio < 1.51" :hexs="card.info.hexs" />
      </div>
    </div>
    <div style="width: 93%">
      <card-price v-if="ratio > 1.78" :price="card.info.price" />
      <card-color v-if="ratio > 1.5" :hexs="card.info.hexs" />
      <card-size :sizes="card.info.sizes" :quantity="card.info.quantity" />
    </div>
  </div>
</template>

<script>
import cardColor from '@/components/card-color.vue'
import cardPrice from '@/components/card-price.vue'
import cardSize from '@/components/card-size.vue'

export default {
  name: 'Card',
  props: ['card', 'isSlider'],
  components: { 'card-color': cardColor, 'card-price': cardPrice, 'card-size': cardSize },
  created() {
    console.log(this.ratio)
  },
  mounted() {},
  data() {
    return {}
  },
  watch: {},
  methods: {
    _imgStyle(base64) {
      return this.imgStyle + `background-image: url('${base64}');background-size: 100% 100%;border-radius: 15px;`
    },
  },
  computed: {
    ratio: {
      get() {
        return this.$store.state.card.ratio
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
