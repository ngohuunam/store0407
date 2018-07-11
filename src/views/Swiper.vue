<template>
  <div class="container">
    <swiper v-if="cards.length" :cards="cards" />
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
  },
}
</script>
<style scoped>
.container {
  /* height: 100vh;
  display: flex;
  align-items: center; */
}
</style>
