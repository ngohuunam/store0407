<template>
  <div class="sticky bottom row">
    <b-field>
      <p class="control">
        <button :class="`button ${isCart ? 'is-danger' : 'is-warning'}`" @click="$emit('leftClick')">
          <b-icon :icon="isCart ? 'cart-off' : 'cart'"></b-icon>
          <span>{{leftLabel}}</span>
        </button>
      </p>
      <p class="control">
        <button class="button is-success" @click="$emit('rightClick')">
          <b-icon :icon="isCart ? 'playlist-plus' : 'approval'"></b-icon>
          <span>{{rigtLabel}}</span>
        </button>
      </p>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'FloatBtnBottom',
  props: [],
  components: {},
  created() {
    this.isCart = this.$route.name === 'cart'
    this.des = this.isCart ? 'order' : 'cart'
    this.rigtLabel = this.isCart ? 'To Order' : 'Place Order'
    this.leftLabel = this.isCart ? 'Delete' : 'Send back'
  },
  mounted() {},
  data() {
    return {}
  },
  watch: {},
  methods: {},
  computed: {},
  beforeDestroy() {},
}
</script>

<style scoped>
</style>
