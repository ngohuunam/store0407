<template>
  <!-- <keep-alive> -->
    <slider v-if="cart.length" :imgs="cart" :isCart="true" />
  <!-- </keep-alive> -->
</template>

<script>
import slider from '../components/slider.vue'

export default {
  name: 'cart',
  data() {
    return {}
  },
  components: { slider },
  mounted() {},
  computed: {
    cart: {
      get() {
        return this.$store.state.image.cart
      },
    },
  },
}
</script>
