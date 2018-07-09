<template>
  <div class="row price">{{price ? (price + '.000đ') : 'loading...'}}</div>
</template>

<script>
export default {
  name: 'CardPrice',
  props: ['price'],
  components: {},
  created() {},
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
@import url('https://fonts.googleapis.com/css?family=Oswald:700');
.price {
  font-family: 'Oswald', sans-serif;
  font-size: 45px;
  text-shadow: 1px 1px #fff, -1px 1px #fff, 1px -1px #fff, -1px -1px #fff, 1px 1px 5px #555;
}
@media (max-width: 576px) {
  .price {
    font-size: 30px;
  }
}
@media (max-width: 321px) {
  .price {
    font-size: 20px;
  }
}
</style>
