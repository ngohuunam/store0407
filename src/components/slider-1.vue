<template>
  <div class="page">
    <div class="horizontal-scroll-wrapper squares">
      <div v-for="(imgObj, i) in imgs" :key="i">
        <img :src="imgObj.data" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: ['op', 'imgs', 'xs', 'cardStyle', 'infos'],
  components: {},
  created() {},
  mounted() {
    if (!this.xs) this.class_ = 'swiper-slide card'
  },
  data() {
    return {
      class_: 'swiper-slide-xs card',
    }
  },
  watch: {},
  methods: {},
  computed: {},
  beforeDestroy() {},
}
</script>


<style lang="scss" scoped>
$finalHeight: 400px;
$finalWidth: 3 * $finalHeight;
$scrollBarHeight: 1px;

::-webkit-scrollbar {
  width: $scrollBarHeight;
  height: $scrollBarHeight;
}

::-webkit-scrollbar-button {
  width: $scrollBarHeight;
  height: $scrollBarHeight;
}

.card {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}

.page {
  position: relative;
  margin: auto;
  width: $finalWidth;
}

div {
  box-sizing: border-box;
}

.horizontal-scroll-wrapper {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: calc(#{$finalHeight} + #{$scrollBarHeight});
  max-height: $finalWidth;
  margin: 0;
  padding-top: $scrollBarHeight;
  background: #abc;
  overflow-y: auto;
  overflow-x: hidden;
  transform: rotate(-90deg) translateY(-$finalHeight);
  transform-origin: right top;
  & > div {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease-in-out;
    // display: block;
    // padding: 5px;
    // background: #cab;
    transform: rotate(90deg);
    transform-origin: right top;
    & > img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}

.squares {
  // padding: $finalHeight 0 0 0;
  & > div {
    width: 100px;
    height: 300px;
    margin: 10px 0;
  }
}
</style>
