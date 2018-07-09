<template>
  <!-- <keep-alive> -->
    <swipeer v-if="cart && cart.length" :imgs="cart" :isCart="true" />
  <!-- </keep-alive> -->
</template>

<script>
import swiper from '../components/swiper.vue'

export default {
  name: 'cart',
  data() {
    return {}
  },
  components: { swiper },
  mounted() {},
  computed: {
    cart: {
      get() {
        return this.$store.state.card.cart
      },
    },
  },
}
</script>
