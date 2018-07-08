<template>
  <div class="row" :style="style()">{{price(name)}}</div>
</template>

<script>
export default {
  name: 'CardPrice',
  props: ['name'],
  components: {},
  created() {},
  mounted() {},
  data() {
    return {}
  },
  watch: {},
  methods: {
    price(name) {
      return this.infos.find(info => info.name === name).price + '.000đ'
    },
    style() {
      const s = this.xs ? 25 : 45
      const m = this.xs ? 5 : 0
      return `font-family: 'Oswald', sans-serif;font-size:${s}px;margin-bottom:${m}px;`
    },
  },
  computed: {
    xs: {
      get() {
        return this.$store.state.image.xs
      },
    },
    infos: {
      get() {
        return this.$store.state.item.setInfos
      },
    },
  },
  beforeDestroy() {},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald:700');
</style>
