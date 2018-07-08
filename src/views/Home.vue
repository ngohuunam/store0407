<template>
  <keep-alive>
    <slider v-if="cards.length && op.speed" :cards="cards" :op="op" />
  </keep-alive>
</template>

<script>
import slider from '../components/slider.vue'

export default {
  name: 'home',
  data() {
    return {}
  },
  components: { slider },
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
