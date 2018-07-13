<template>
  <div class="modal-mask">
    <a href="#" class="close button left" @click="closeModal"></a>
    <a href="#" class="close button right" @click="closeModal"></a>
    <a href="#" class="add button left" @click="toCart"></a>
    <a href="#" class="add button right" @click="toCart"></a>
    <swiper :cards="modal" :isModal="isModal" ref="swiper" />
  </div>
</template>

<script>
import swiper from '@/components/swiper.vue'

export default {
  name: 'modal',
  props: ['modal'],
  components: { swiper },
  created() {},
  mounted() {},
  data() {
    return {
      isModal: true,
    }
  },
  watch: {},
  methods: {
    closeModal() {
      this.$store.commit('card/clearModal')
    },
    toCart() {
      console.log(this.$refs.swiper.swiper.activeIndex)
    },
  },
  computed: {},
  beforeDestroy() {},
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}
.button {
  position: fixed;
  width: 10%;
  height: 10%;
  opacity: 0.2;
  z-index: 3;
}
.button.add {
  top: 45%;
}
.button.close {
  top: 35%;
}
.button.right {
  right: 3%;
}
.button.left {
  left: 3%;
}
.button.center {
  left: 45%;
}
.button:hover {
  opacity: 1;
}
.button.close:hover:before {
  transform: rotate(90deg);
}
.button.close:hover:after {
  transform: rotate(-90deg);
}
.button:before,
.button:after {
  position: absolute;
  content: ' ';
  height: 60%;
  width: 20%;
  max-width: 18px;
  background-color: #333;
  transition: all 0.2s ease-out;
}
.button.close:before {
  transform: rotate(45deg);
}
.button.close:after {
  transform: rotate(-45deg);
}
.button.add:before {
  transform: rotate(0deg);
}
.button.add:after {
  transform: rotate(90deg);
}
</style>
