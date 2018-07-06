<template>
  <div>
    <slider v-if="imgs.length && op.speed && (infos.length === imgs.length)" :imgs="imgs" :cardStyle="cardStyle" :op="op" :xs="xs" :infos="infos" />
  </div>
</template>

<script>
import slider from '../components/slider.vue'

export default {
  data() {
    return {}
  },
  components: { slider },
  mounted() {},
  computed: {
    xs: {
      get() {
        return this.$store.state.image.xs
      },
    },
    op: {
      get() {
        return this.$store.state.image.op
      },
    },
    cardStyle: {
      get() {
        return this.$store.state.image.cardStyle
      },
    },
    imgs: {
      get() {
        return this.$store.state.image.imgs
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
