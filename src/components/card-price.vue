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
  text-shadow: 0.1vw 0.1vw #fff, -0.1vw 0.1vw #fff, 0.1vw -0.1vw #fff, -0.1vw -0.1vw #fff, 0.1vw 0.1vw 0.6vw #555;
}
@media (min-width: 768px) {
  .price {
    font-size: 2em;
  }
}
/* @media (min-width: 1025px) {
  .price {
    font-size: 1.5em;
  }
} */
</style>
