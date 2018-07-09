<template>
  <div class="row container">
    <div>Size: </div>
    <div v-for="size in sizes" :key="size" class="row center size">
      <div>{{size}}</div>
      <div class="details">
        <div v-for="color in quantity[size]" :key="color.hex" class="row">
          <div class="color" :style="`background-color:${color.hex};`"></div>
          <div class="small-text">{{color.quantity}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSize',
  props: ['sizes', 'quantity'],
  components: {},
  created() {},
  mounted() {},
  data() {
    return {}
  },
  watch: {},
  methods: {
    colors(size) {
      const colors = this.quantity[size]
      return colors
    },
  },
  computed: {},
  beforeDestroy() {},
}
</script>

<style scoped lang="scss">
$w: 45px;
$ws: $w * 0.66;
$s: 1.4em;
$ss: $s * 0.5;
$sst: $s * 0.4;
$ssts: $s * 0.5;
$ml: 8px;
$mr: $ml * 0.5;
$wc: $w * 0.3;
$mls: $ml * 0.6;
$mrs: $mls * 0.6;
$wcs: $wc * 0.5;

.container {
  font-size: $s;
}
.size {
  min-width: $w;
  height: $w;
  margin-left: $ml;
  border-radius: 5px;
  border: 0.7px grey dotted;
}
.color {
  min-width: $wc;
  height: $wc;
  margin-left: $ml;
  margin-right: $mr;
}
.small-text {
  font-size: $sst;
}
.details {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
@media (max-width: 767px) {
  .container {
    font-size: 11px;
  }
  .size {
    min-width: $ws;
    height: $ws;
    margin-left: $mls;
  }
  .small-text {
    font-size: $ssts;
  }
  .color {
    min-width: $wcs;
    height: $wcs;
    margin-left: $mls;
    margin-right: $mrs;
  }
}
</style>
