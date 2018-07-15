<template>
  <div class="my-card" :style="`font-size: ${fontSize}em;`">
    <div class="row end my-card-img" :style="`height:${height}px;background-image: url('${bgImg}')`">
      <div v-if="ratio > 0 && ratio < 1.779" class="my-card-info">
        <div>## {{name}} </div>
        <card-price v-if="ratio < 1.779 && (info.priceMin || info.priceMax)" :priceMin="info.priceMin" :priceMax="info.priceMax" />
        <card-color v-if="ratio < 1.51" :hexs="info.hexs" />
        <card-size v-if="ratio > 1 && ratio < 1.34" :sizes="info.sizes" :isModal="isModal" />
      </div>
    </div>
    <div v-if="ratio < 1 || ratio > 1.34" class="my-card-info">
      <card-price v-if="ratio > 1.78 && (info.priceMin || info.priceMax)" :priceMin="info.priceMin" :priceMax="info.priceMax" />
      <card-color v-if="ratio > 1.5" :hexs="info.hexs" />
      <card-size v-if="ratio < 1 || ratio > 1.34" :sizes="info.sizes" :isModal="isModal" />
    </div>
  </div>
</template>

<script>
import cardColor from '@/components/card-color.vue'
import cardPrice from '@/components/card-price.vue'
import cardSize from '@/components/card-size.vue'

export default {
  name: 'Card',
  props: ['bgImg', 'info', 'name', 'isModal'],
  components: { 'card-color': cardColor, 'card-price': cardPrice, 'card-size': cardSize },
  created() {
    this.ratio = window.innerHeight / window.innerWidth
    // console.log(this.ratio)
  },
  mounted() {
    this.height = this.$el.clientWidth * 1.3
    this.fontSize = this.$el.clientWidth * 0.004
  },
  data() {
    return {
      height: 0,
      fontSize: 1,
    }
  },
  watch: {},
  methods: {},
  computed: {},
  beforeDestroy() {},
}
</script>

<style>
.my-card {
  text-align: left;
  display: flex;
  flex: 0 0 48%;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 0.3vw;
  box-shadow: 0.1vw 0.1vw 0.5vw rgba(0, 0, 0, 0.3);
  margin-bottom: 1vw;
}
.my-card-img {
  /* display: flex;
  justify-content: center; */
  background-size: 100% 100%;
  border-radius: 0.3vw;
}
.my-card-info {
  width: 96%;
  margin-left: 2%;
}
@media (min-width: 1025px) {
  .my-card {
    flex: 0 0 31.3%;
  }
}
</style>
