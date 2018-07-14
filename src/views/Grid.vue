<template>
  <div>
    <div class="sticky">
      <b-icon icon="information-outline" size="is-medium" type="is-info" class="float-btn" @click.native="$router.push('/about')" />
      <b-icon v-if="hasCart" icon="cart-outline" size="is-medium" type="is-success" class="float-btn" @click.native="$router.push('/cart')" />
      <b-icon v-if="hasOrder" icon="calendar-check" size="is-medium" type="is-warning" class="float-btn" @click.native="$router.push('/order')" />
    </div>
    <div v-if="cards.length" class="container">
      <card-simple class="m" v-for="(card, i) in cards" :key="card.name" :bgImg="bgImg(i)" :info="card.info" @click.native="toModal(card)" />
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
    return {}
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
    hasCart: {
      get() {
        return this.$store.state.card.cart.length > 0
      },
    },
    hasOrder: {
      get() {
        return this.$store.state.card.order.length > 0
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
