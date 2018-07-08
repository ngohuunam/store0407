<template>
  <div class="row" style="margin-bottom: 10px;">
    <div :style="fontSize">Color: </div>
    <div v-for="color in colors" :key="color.hex" :style="style(color.hex)"></div>
  </div>
</template>

<script>
export default {
  name: 'CardColor',
  props: ['name'],
  components: {},
  created() {},
  mounted() {},
  data() {
    return {}
  },
  watch: {},
  methods: {
    style(hex) {
      const p = this.xs ? 30 : 45
      const m = this.xs ? 5 : 10
      return `background-color:${hex}; width: ${p}px; height: ${p}px; margin-left: ${m}px; border-radius: 5px;`
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
    colors: {
      get() {
        return this.infos.find(info => info.name === this.name).colors
      },
    },
    fontSize: {
      get() {
        let s = this.xs ? 15 : 20
        return `font-size:${s}px`
      },
    },
  },
  beforeDestroy() {},
}
</script>

<style scoped>
</style>
