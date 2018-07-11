<template>
  <!-- <div class="row container"> -->
    <div class="row m-b">Size: {{sizes ? sizes.join(' | ') : ''}}</div>
    <!-- <div>Size: </div>
    <div v-for="size in sizes" :key="size" class="row center size">
      <div>
        <span>{{size}}</span>
      </div>
      <div class="details">
        <div v-for="color in quantity[size]" :key="color.hex" class="row">
          <div class="color" :style="`background-color:${color.hex};`"></div>
          <div class="quantity">{{color.quantity}}</div>
        </div>
      </div>
    </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: 'CardSize',
  props: ['sizes', 'quantity'],
}
</script>

<style scoped>
.container {
  /* font-size: 3vw; */
  /* margin-top: 1vw; */
}
.size {
  min-width: 4vw;
  height: 7vw;
  margin-left: 0.5vw;
  border-radius: 0.5vw;
  border: 0.2vw grey dotted;
  justify-content: flex-end;
}
.size > div {
  width: 100%;
}
.color {
  min-width: 2vw;
  height: 2vw;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
}
.quantity {
  font-size: 0.5em;
}
.details {
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
}
@media (min-width: 768px) {
  .size {
    min-width: 3vw;
    height: 5vw;
  }
  .color {
    min-width: 1.5vw;
    height: 1.5vw;
  }
  .quantity {
    /* font-size: 1.5vw; */
  }
}
</style>
