<template>
  <div class="row price">{{price()}}</div>
</template>

<script>
export default {
  name: 'CardPrice',
  props: ['priceMin', 'priceMax'],
  methods: {
    price() {
      if (this.priceMin || this.priceMax) {
        if (this.priceMin === this.priceMax) return `${this.priceMin}.000đ`
        const arrow = this.priceMin && this.priceMax ? ' => ' : ''
        return `${this.priceMin ? `${this.priceMin}.000đ` : ''}${arrow}${this.priceMax ? `${this.priceMax}.000đ` : ''}`
      } else return 'loading...'
    },
  },
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
