<template>
  <div class="row m-b left">
    <div v-if="isModal">
      <div v-for="size in sizes" :key="size.inf">
        <b-checkbox v-model="$store.state.card.cart" :native-value="size">
          {{size.inf}}
        </b-checkbox>
      </div>
      <!-- <div v-for="size in sizes" :key="size">
        <input type="checkbox" :id="size" :value="size" v-model="$store.state.card.cart">
        <label :for="size">{{size}}</label>
      </div> -->
    </div>
    <!-- <span v-if="isModal" style="white-space: pre-line">{{sizes ? sizes.join('\n') : ''}}</span> -->
    <span v-else>Size: {{sizes ? sizes.join(' | ') : ''}}</span>
  </div>
</template>

<script>
export default {
  name: 'CardSize',
  props: ['sizes', 'isModal'],
  data() {
    return {
      picked: [],
    }
  },
  created() {
    this.picked = this.$store.state.card.cart
  },
}
</script>

<style scoped>
</style>
