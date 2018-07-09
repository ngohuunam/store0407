<template>
  <div class="container row">
    <div>Color: </div>
    <div v-for="hex in hexs" :key="hex" class="hex" :style="`background-color:${hex}`"></div>
  </div>
</template>

<script>
export default {
  name: 'CardColor',
  props: ['hexs'],
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

<style scoped lang="scss">
$s: 1.4em;
$ss: $s * 0.5;

.container {
  font-size: $s;
  margin-bottom: 10px;
  height: 40px;
}
.hex {
  width: 40px;
  height: 100%;
  margin-left: 3%;
  border-radius: 5px;
}
@media (max-width: 767px) {
  .container {
    font-size: $ss;
    height: 20px;
    margin-bottom: 6px;
  }
  .hex {
    width: 20px;
  }
}
@media (max-width: 321px) {
  .container {
    font-size: 11px;
    height: 16px;
    margin-bottom: 3px;
  }
  .hex {
    width: 16px;
  }
}
</style>
