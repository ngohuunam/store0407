<template>
  <div v-if="cards.length" class="container">
    <card-simple v-for="card in cards" :key="card.name" :card="card" />
  </div>
</template>

<script>
import cardSimple from '@/components/card-simple.vue'

export default {
  name: 'Grid',
  components: { 'card-simple': cardSimple },
  created() {},
  mounted() {},
  data() {
    return {}
  },
  watch: {},
  methods: {},
  computed: {
    cards: {
      get() {
        return this.$store.state.card.cards
      },
    },
  },
  beforeDestroy() {},
}
</script>

<style scoped>
.container {
  max-width: 1380px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: white;
}
</style>
