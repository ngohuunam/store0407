<template>
  <div class="modal-mask">
    <!-- <a href="#" class="close bttn left" @click="closeModal"></a>
    <a href="#" class="close bttn right" @click="closeModal"></a> -->
    <a class="delete is-large fixed left" @click="closeModal"></a>
    <a class="delete is-large fixed right" @click="closeModal"></a>
    <swiper :cards="modal" :isModal="isModal" />
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
  },
  computed: {},
  beforeDestroy() {},
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 5;
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
.fixed {
  position: fixed;
  top: 40%;
  z-index: 3;
}
.right {
  right: 3%;
}
.left {
  left: 3%;
}
</style>
