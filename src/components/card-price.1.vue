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
  margin-bottom: 1px;
}
@media (max-width: 576px) {
  .price {
    font-size: 25px;
    margin-bottom: 5px;
  }
}
</style>
