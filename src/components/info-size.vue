<template>
  <div :style="sizeStyle()" class="row center">
    <div :style="fontSize()">{{size}}</div>
    <div style="display: flex; flex-direction: column; flex-wrap: wrap;">
      <div v-for="color in colorsBySize(name, size)" :key="color.hex" class="row">
        <div :style="colorBySizeStyle(color.hex)"></div>
        <div :style="fontSize(true)">{{color.quantity}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: ['xs', 'colors', 'size', 'name', 'infos'],
  components: {},
  created() {
    this.p = this.xs ? 30 : 45
    this.m = this.xs ? 5 : 10
    this.s = this.xs ? 10 : 20
  },
  mounted() {},
  data() {
    return {}
  },
  watch: {},
  methods: {
    sizeStyle() {
      return `font-size:${this.s}px; min-width: ${this.p * 0.8}px; height: ${this.p}px; margin-left:${this.m * 0.7}px; border-radius: 5px; border: 0.7px grey dotted`
    },
    colorsBySize(name, size) {
      const colors = this.infos.find(info => info.name === name).quantity[size]
      return colors
    },
    colorBySizeStyle(hex) {
      return `background-color:${hex}; width: ${this.p * 0.3}px; height: ${this.p * 0.3}px; margin-left: ${this.m}px; margin-right: ${this.m * 0.6}px`
    },
    fontSize(S) {
      let s = this.xs ? 12 : 20
      if (S) s = s * 0.7
      return `font-size:${s}px`
    },
  },
  computed: {},
  beforeDestroy() {},
}
</script>

<style scoped>
</style>
