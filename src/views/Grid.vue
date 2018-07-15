<template>
  <div>
    <div v-if="cards.length" class="container">
      <card-simple class="m" v-for="(card, i) in cards" :key="card.name" :bgImg="bgImg(i)" :info="card.info" :name="card.name" @click.native="toModal(card)" />
    </div>
    <modal v-if="modal.length" :modal="modal" />
  </div>
</template>

<script>
import cardSimple from '@/components/card-simple.vue'
import modal from '@/components/modal.vue'
import loading from '@/assets/loading.jpg'

export default {
  name: 'Grid',
  components: { 'card-simple': cardSimple, modal },
  created() {},
  mounted() {},
  data() {
    return {
      openSticky: true,
    }
  },
  watch: {},
  methods: {
    toModal(card) {
      this.$store.commit('card/toModal', card)
    },
    bgImg(i) {
      return this.cards[i].base64[0] || loading
    },
  },
  computed: {
    cards: {
      get() {
        return this.$store.state.card.cards
      },
    },
    modal: {
      get() {
        return this.$store.state.card.modal
      },
    },
  },
  beforeDestroy() {
    this.$store.commit('card/clearModal')
  },
}
</script>

<style scoped>
.container {
  max-width: 1024px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
.m {
  margin: 1%;
}
</style>
