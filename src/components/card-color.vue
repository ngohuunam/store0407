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
}
</script>

<style scoped>
.container {
  margin-bottom: 1%;
}
.hex {
  width: 10%;
  height: 15px;
  margin-left: 1%;
  /* border-radius: 50%; */
}
@media (min-width: 375px) {
  .hex {
    height: 20px;
  }
}
@media (min-width: 768px) {
  .hex {
    height: 35px;
  }
}
@media (min-width: 1024px) {
  .hex {
    height: 45px;
  }
}
@media (min-width: 1025px) {
  .hex {
    height: 60px;
  }
}
</style>
