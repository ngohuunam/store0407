<template>
  <div class="order">
    <div v-if="order.length">
      <b-table :data="order" :mobile-cards="false" checkable :checked-rows.sync="orderChecked" narrowed>
        <template slot-scope="props">
          <b-table-column label="Prod" centered>
            <img :src="findImg(props.row)" />
          </b-table-column>

          <b-table-column label="Info" style="width: 90%" numeric>
            <div class="row right">
              <div :style="`background-color:${props.row.h};`" class="color"></div>
              <div>{{info(props.row)}}</div>
            </div>
          </b-table-column>
        </template>
        <template slot="footer">
          <div class="has-text-right">Grand total: {{total() + '.000đ'}}</div>
        </template>
      </b-table>
    </div>
    <BottomBtn v-if="orderChecked.length" @leftClick="toCart" @rightClick="placeOrder" />
  </div>
</template>

<script>
import BottomBtn from '@/components/float-btn-bottom.vue'

export default {
  name: 'Order',
  data() {
    return {
      orderChecked: [],
    }
  },
  components: { BottomBtn },
  created() {
    if (!this.order.length) this.$router.push('/cart')
  },
  methods: {
    placeOrder() {
      console.log('placeOrder')
    },
    toCart() {
      this.$store.commit('card/moveTo', { des: 'cart', objs: this.orderChecked })
      this.$store.commit('card/spliceItem', { des: 'order', objs: this.orderChecked })
      this.orderChecked = []
    },
    info(orderObj) {
      if (orderObj) return `S: ${orderObj.s}, ${orderObj.p}.000đ x ${orderObj.q} = ${orderObj.p * orderObj.q}.000đ`
    },
    findImg(orderObj) {
      if (orderObj) return this.$store.getters['card/img'](orderObj)
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
      if (!this.order.length) this.$router.push('/cart')
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
<style scoped>
.order {
  font-size: 0.8rem;
}
.color {
  width: 50%;
  max-width: 40px;
  padding: 10px 0px;
  margin: 0 5px;
}
</style>
