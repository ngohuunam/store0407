<template>
  <div class="card">
    <!-- <div class="row end" :style="_imgStyle(card.base64)"> -->
    <div class="row end card-img" :style="`height:${height}px;background-image: url('${card.base64}')`">
      <!-- <img :src="card.base64" /> -->
      <div v-if="ratio > 1 || ratio < 1.779" class="card-info">
        <card-price v-if="ratio < 1.779" :price="card.info.price" />
        <card-color v-if="ratio < 1.51" :hexs="card.info.hexs" />
        <card-size v-if="ratio > 1 && ratio < 1.34" :sizes="card.info.sizes" :quantity="card.info.quantity" />
      </div>
    </div>
    <div v-if="ratio < 1 || ratio > 1.34" class="card-info">
      <card-price v-if="ratio > 1.78" :price="card.info.price" />
      <card-color v-if="ratio > 1.5" :hexs="card.info.hexs" />
      <card-size v-if="ratio < 1 || ratio > 1.34" :sizes="card.info.sizes" :quantity="card.info.quantity" />
    </div>
  </div>
</template>

<script>
import cardColor from '@/components/card-color.vue'
import cardPrice from '@/components/card-price.vue'
import cardSize from '@/components/card-size.vue'

export default {
  name: 'Card',
  props: ['card'],
  components: { 'card-color': cardColor, 'card-price': cardPrice, 'card-size': cardSize },
  created() {
    this.ratio = window.innerHeight / window.innerWidth
    // console.log(this.ratio)
  },
  mounted() {
    // console.log(this.$el.clientWidth)
    this.height = this.$el.clientWidth * 1.3
  },
  data() {
    return { height: 0 }
  },
  watch: {},
  methods: {},
  computed: {},
  beforeDestroy() {},
}
</script>

<style>
.card {
  display: flex;
  flex: 0 0 48%;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 1vw;
  box-shadow: 0.3vw 0.3vw 1.5vw rgba(0, 0, 0, 0.2);
  /* transition: all 0.5s ease-in-out; */
  margin-bottom: 1vw;
  font-size: 0.8em;
}
.card > .card-img {
  display: flex;
  justify-content: center;
  /* height: calc(46% * 1.3); */
  background-size: 100% 100%;
  border-radius: 1vw;
}
.card-info {
  width: 96%;
}
@media (min-width: 375px) {
  .card {
    font-size: 1em;
  }
}
@media (min-width: 768px) {
  .card {
    font-size: 1.5em;
  }
}
@media (min-width: 1024px) {
  .card {
    font-size: 2em;
  }
}
@media (min-width: 1025px) {
  .card {
    /* font-size: 3em; */
    flex: 0 0 32%;
  }
}
</style>
