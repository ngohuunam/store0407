<template>
  <div :style="style"></div>
</template>

<script>
export default {
  name: 'slider',
  props: ['xs', 'hex'],
  components: {},
  created() {
    this.p = this.xs ? 30 : 45
    this.m = this.xs ? 5 : 10
  },
  mounted() {},
  data() {
    return {}
  },
  watch: {},
  methods: {},
  computed: {
    style: {
      get() {
        return `background-color:${this.hex}; width: ${this.p}px; height: ${this.p}px; margin-left: ${this.m}px; border-radius: 5px;`
      },
    },
  },
  beforeDestroy() {},
}
</script>

<style scoped>
</style>
