<template>
  <keep-alive>
    <slider v-if="imgs.length && op.speed && (infos.length === imgs.length)" :imgs="imgs" />
  </keep-alive>
</template>

<script>
import slider from '../components/slider.vue'

export default {
  name: 'home',
  data() {
    return {}
  },
  components: { slider },
  mounted() {},
  computed: {
    imgs: {
      get() {
        return this.$store.state.image.imgs
      },
    },
    op: {
      get() {
        return this.$store.state.image.op
      },
    },
    infos: {
      get() {
        return this.$store.state.item.setInfos
      },
    },
  },
}
</script>
