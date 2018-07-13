<template>
  <div class="row m-b left">
    <div v-if="isModal">
      <div v-for="size in sizes" :key="size">
        <input type="radio" :id="size" :value="size" v-model="picked">
        <label :for="size">{{size}}</label>
      </div>
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
      picked: 0,
    }
  },
}
</script>

<style scoped>
</style>
