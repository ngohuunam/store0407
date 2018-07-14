<template>
  <div>
    <div class="sticky">
      <b-icon icon="home-outline" type="is-info" size="is-medium" class="float-btn" @click.native="$router.push('/')" />
      <b-icon icon="cart-off" v-if="cartChecked.length" type="is-danger" size="is-medium" class="float-btn" @click.native="cartOff" />
      <b-icon icon="calendar-check" v-if="cartChecked.length" type="is-success" size="is-medium" class="float-btn" @click.native="toOrder" />
    </div>
    <b-table v-if="cart.length" :data="cart" checkable narrowed :checked-rows.sync="cartChecked">
      <template slot-scope="props">
        <b-table-column label="Prod" width="100" centered>
          <img :src="findImg(props.row)" class="is-hidden-mobile" />
          <img style="width: 20%" :src="findImg(props.row)" class="is-hidden-desktop is-pulled-right" />
        </b-table-column>

        <b-table-column label="Info" width="400" numeric>
          <div class="row right">
            Color:
            <div :style="`background-color:${props.row.h}; padding: 10px 20px; margin: 0 5px;`"></div>
            <div> Name: {{ props.row.z }}, Size: {{ props.row.s }} </div>
          </div>
        </b-table-column>

        <b-table-column label="Price" width="300" numeric>
          {{ props.row.p + '.000đ' }}
        </b-table-column>

        <b-table-column label="Quantity" width="200" numeric>
          <b-input type="number" v-model="props.row.q" class="is-hidden-mobile"></b-input>
          <b-input type="number" v-model="props.row.q" class="is-hidden-desktop is-pulled-right" style="width: 40%" size="is-small"></b-input>
        </b-table-column>

        <b-table-column label="Total" width="200" numeric>
          {{ (props.row.p * props.row.q) + '.000đ' }}
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
  name: 'cart',
  data() {
    return {
      cartChecked: [],
    }
  },
  components: {},
  mounted() {
    if (!this.cart.length) this.$router.push('/')
  },
  methods: {
    toOrder() {
      console.log('toOrder')
      this.$store.commit('card/toOrder', this.cartChecked)
      this.cartOff()
      this.$router.push('order')
    },
    rowClass() {
      return 'row-table'
    },
    cartOff() {
      const cartItems = this.cartChecked.map(cartObj => cartObj.item)
      this.$store.commit('card/spliceCart', cartItems)
      this.cartChecked = []
    },
    findImg(cartObj) {
      if (cartObj) return this.$store.getters['card/img'](cartObj)
    },
    total() {
      return this.cart.reduce((res, _item) => {
        const to = res + _item.p * _item.q
        return to
      }, 0)
    },
  },
  watch: {
    cart: function() {
      if (!this.cart.length) this.$router.push('/')
    },
  },
  computed: {
    cart: {
      get() {
        return this.$store.state.card.cart
      },
    },
  },
}
</script>
<style>
td {
  vertical-align: middle !important;
}
input[type='number'].input {
  text-align: right !important;
}
</style>
