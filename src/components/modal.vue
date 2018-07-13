<template>
  <div class="modal-mask">
    <a href="#" class="close bttn left" @click="closeModal"></a>
    <a href="#" class="close bttn right" @click="closeModal"></a>
    <a href="#" class="add bttn left" @click="toCart"></a>
    <a href="#" class="add bttn right" @click="toCart"></a>
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
.bttn {
  position: fixed;
  width: 10%;
  height: 10%;
  opacity: 0.2;
  z-index: 3;
}
.bttn.add {
  top: 45%;
}
.bttn.close {
  top: 35%;
}
.bttn.right {
  right: 3%;
}
.bttn.left {
  left: 3%;
}
.bttn.center {
  left: 45%;
}
.bttn.close:hover {
  opacity: 1;
}
.bttn.close:hover:before {
  transform: rotate(90deg);
}
.bttn.close:hover:after {
  transform: rotate(-90deg);
}
.bttn:before,
.bttn:after {
  position: absolute;
  content: ' ';
  height: 60%;
  width: 20%;
  max-width: 18px;
  background-color: #333;
  transition: all 0.2s ease-out;
}
.bttn.close:before {
  transform: rotate(45deg);
}
.bttn.close:after {
  transform: rotate(-45deg);
}
.bttn.add:before {
  transform: rotate(0deg);
}
.bttn.add:after {
  transform: rotate(90deg);
}
</style>
