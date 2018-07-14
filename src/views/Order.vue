<template>
  <div>
    <div class="sticky">
      <b-icon icon="home-outline" type="is-info" size="is-medium" class="float-btn" @click.native="$router.push('/')" />
      <!-- <b-icon icon="cart-off" type="is-danger" size="is-medium" class="float-btn" @click.native="cartOff" /> -->
      <!-- <b-icon icon="calendar-check" size="is-medium" class="float-btn" @click.native="order" /> -->
    </div>
    <b-table v-if="order.length" :data="order" :mobile-cards="false" narrowed>
      <template slot-scope="props">
        <b-table-column label="Prod" centered>
          <img :src="findImg(props.row)" />
        </b-table-column>

        <b-table-column label="Info" width="400" numeric>
          <div class="row right">
            <div :style="`background-color:${props.row.h}; padding: 10px 20px; margin: 0 5px;`"></div>
            <div> S: {{ props.row.s }}, {{ props.row.p + '.000đ' }} x {{ props.row.q }} = {{ (props.row.p * props.row.q) + '.000đ' }} </div>
          </div>
        </b-table-column>
      </template>
      <template slot="footer">
        <div class="has-text-right">Grand total: {{total() + '.000đ'}}</div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data() {
    return {}
  },
  components: {},
  mounted() {
    if (!this.order.length) this.$router.push('/')
  },
  methods: {
    placeOrder() {
      console.log('placeOrder')
    },
    findImg(cartObj) {
      if (cartObj) return this.$store.getters['card/img'](cartObj)
    },
    total() {
      return this.order.reduce((res, _item) => {
        const to = res + _item.p * _item.q
        return to
      }, 0)
    },
  },
  watch: {
    order: function() {
      if (!this.cart.length) this.$router.push('/')
    },
  },
  computed: {
    order: {
      get() {
        return this.$store.state.card.order
      },
    },
  },
}
</script>
<style>
</style>
