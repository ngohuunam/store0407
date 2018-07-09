<template>
  <div class="container">
    <swiper v-if="cards.length && op.speed" :cards="cards" :op="op" />
  </div>
</template>

<script>
import swiper from '../components/swiper.vue'

export default {
  name: 'home',
  data() {
    return {}
  },
  components: { swiper },
  mounted() {},
  computed: {
    cards: {
      get() {
        return this.$store.state.card.cards
      },
    },
    op: {
      get() {
        return this.$store.state.card.op
      },
    },
  },
}
</script>
<style scoped>
/* .container {
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
} */
</style>
