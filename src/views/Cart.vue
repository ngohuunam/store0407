<template>
  <div>
    <div v-if="cart.length" class="cart">
      <b-table :data="cart" checkable narrowed :checked-rows.sync="cartChecked">
        <template slot-scope="props">
          <b-table-column label="Prod" width="100" centered>
            <img :src="findImg(props.row)" class="is-hidden-mobile" />
            <img style="width: 6vh" :src="findImg(props.row)" class="is-hidden-tablet is-pulled-right" />
          </b-table-column>

          <b-table-column label="Info" width="400" numeric>
            <div class="row right">
              <div :style="`background-color:${props.row.h}; padding: 0.4rem 2rem; margin: 0 5px;`"></div>
              <div>Size: {{ props.row.s }}, ## {{ props.row.z }}</div>
            </div>
          </b-table-column>

          <b-table-column label="Price" width="300" numeric>
            {{ props.row.p + '.000đ' }}
          </b-table-column>

          <b-table-column label="Quantity" width="200" numeric>
            <b-input type="number" v-model="props.row.q" class="is-hidden-mobile"></b-input>
            <b-input type="number" v-model="props.row.q" class="is-hidden-tablet is-pulled-right" style="width: 40%" size="is-small"></b-input>
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
    <BottomBtn v-if="cartChecked.length" @leftClick="del" @rightClick="toOrder" />
  </div>
</template>

<script>
import BottomBtn from '@/components/float-btn-bottom.vue'

export default {
  name: 'cart',
  data() {
    return {
      cartChecked: [],
    }
  },
  components: { BottomBtn },
  created() {
    if (!this.cart.length) this.$router.push('/')
  },
  methods: {
    toOrder() {
      this.$store.commit('card/moveTo', { des: 'order', objs: this.cartChecked })
      this.del()
      this.$router.push('/order')
    },
    del() {
      this.$store.commit('card/spliceItem', { des: 'cart', objs: this.cartChecked })
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
  align-items: center;
}
input[type='number'].input {
  text-align: right !important;
}
input[type='number'].input.is-small {
  padding-right: 20px !important;
}
.cart {
  font-size: 0.7rem;
}
@media (min-width: 400px) {
  .cart {
    font-size: 1rem;
  }
}
</style>
