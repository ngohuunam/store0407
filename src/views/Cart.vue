<template>
  <b-table v-if="cart.length" :data="cart" :mobile-cards="true">
    <template slot-scope="props">
      <b-table-column label="Prod" width="40" centered class="row-table">
        <img :src="findImg(props.row)" class="is-hidden-mobile" />
        <img style="width: 20%" :src="findImg(props.row)" class="is-hidden-desktop is-pulled-right" />
      </b-table-column>

      <b-table-column label="Name" centered class="row-table">
        {{ props.row.z }}
      </b-table-column>

      <b-table-column label="Color" centered class="row-table">
        <div :style="`background-color:${props.row.h}; padding: 15%; margin: 0 auto;`" class="is-hidden-mobile"></div>
        <div :style="`background-color:${props.row.h}; height: 100%; width: 60px;`" class="is-hidden-desktop"></div>
      </b-table-column>

      <b-table-column label="Size" centered class="row-table">
        {{ props.row.s }}
      </b-table-column>

      <b-table-column label="Price" numeric class="row-table">
        {{ props.row.p + '.000đ' }}
      </b-table-column>

      <b-table-column label="Quantity" width="40" numeric class="row-table">
        <b-input type="number" v-model="props.row.q" class="is-hidden-mobile"></b-input>
        <b-input type="number" v-model="props.row.q" class="is-hidden-desktop is-pulled-right" style="width: 40%" size="is-small"></b-input>
        <!-- {{ props.row.q }} -->
      </b-table-column>

      <b-table-column label="Total" numeric class="row-table">
        {{ (props.row.p * props.row.q) + '.000đ' }}
      </b-table-column>
    </template>
    <template slot="footer">
      <div class="has-text-right">Grand total: {{total() + '.000đ'}}</div>
    </template>
  </b-table>
</template>

<script>
export default {
  name: 'cart',
  data() {
    return {}
  },
  components: {},
  mounted() {},
  methods: {
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
  computed: {
    cart: {
      get() {
        return this.$store.state.card.cart
      },
    },
  },
}
</script>
<style scoped>
.row-table {
  vertical-align: middle;
}
.input {
  text-align: right !important;
}
</style>
