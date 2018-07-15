<template>
  <div class="sticky side col">
    <b-icon v-if="!open" icon="plus-circle-outline" type="is-success" size="is-medium" class="float-btn" @click.native="open = !open" />
    <b-icon v-if="open" icon="minus-circle-outline" type="is-grey-lighter" size="is-medium" class="float-btn" @click.native="open = !open" />
    <div class="col" v-if="open">
      <b-icon v-if="$route.name !== 'grid'" icon="home-outline" type="is-info" size="is-medium" class="float-btn" @click.native="$router.push('/')" />
      <b-icon v-if="$route.name !== 'about'" icon="information-outline" size="is-medium" type="is-info" class="float-btn" @click.native="$router.push('/about')" />
      <b-icon v-if="$route.name !== 'cart' && hasCart" icon="cart-outline" size="is-medium" type="is-success" class="float-btn" @click.native="$router.push('/cart')" />
      <b-icon v-if="$route.name !== 'order' && hasOrder" icon="calendar-check" size="is-medium" type="is-warning" class="float-btn" @click.native="$router.push('/order')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatBtnSide',
  props: [],
  components: {},
  created() {},
  mounted() {},
  data() {
    return {
      open: true,
    }
  },
  watch: {},
  methods: {},
  computed: {
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
  beforeDestroy() {},
}
</script>

<style scoped>
</style>
