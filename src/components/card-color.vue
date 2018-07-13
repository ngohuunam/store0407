<template>
  <div class="color row">
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
.color {
  margin-bottom: 1%;
}
.hex {
  padding: 5%;
  margin-left: 1%;
  border-radius: 50%;
}
</style>
