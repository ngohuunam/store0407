<template>
  <div class="row price">{{price ? (price + '.000đ') : 'loading...'}}</div>
</template>

<script>
export default {
  name: 'CardPrice',
  props: ['price'],
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald:700');
.price {
  font-family: 'Oswald', sans-serif;
  font-size: 1.5em;
  text-shadow: 0.07vw 0.07vw #fff, -0.07vw 0.07vw #fff, 0.07vw -0.07vw #fff, -0.07vw -0.07vw #fff, 0.07vw 0.07vw 0.3vw #555;
}
</style>
