<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/swiper">Swiper</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <keep-alive v-if="ready" include="grid"> -->
    <div v-if="ready">
      <SideBtn />
      <router-view />
    </div>
    <!-- </keep-alive> -->
    <div v-else>
      <img src="https://images.schoolofmotion.com/w950/57723666-611a-4e73-9b84-45d4d9ee4045/Simple_Colors.gif" style="width: 300px;" />
      <div>Loading...</div>
    </div>
  </div>
</template>

<script>
import SideBtn from '@/components/float-btn-side.vue'

export default {
  name: 'App',
  components: { SideBtn },
  data() {
    return {
      checkReadyInterval: null,
    }
  },
  created() {
    this.init()
    this.unwatch = this.$watch('ready', function(newValue) {
      if (newValue) {
        clearInterval(this.checkReadyInterval)
        this.unwatch()
      }
    })
    this.checkReady()
  },
  computed: {
    ready() {
      return this.$store.state.ready && this.$store.state.card.ready
    },
  },
  watch: {},
  methods: {
    checkReady() {
      this.checkReadyInterval = setInterval(() => {
        if (!this.ready) {
          this.init()
        }
      }, 200)
    },
    init() {
      this.$store.dispatch('init')
      this.$store.dispatch('card/init')
    },
  },
}
</script>

<style>
#app {
  max-width: 1024px;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.row {
  width: 100%;
  display: flex;
  align-items: center;
}
.col {
  display: flex;
  flex-direction: column;
}
.row.end {
  align-items: flex-end;
}
.row.center {
  justify-content: center;
}
.row.right {
  justify-content: flex-end;
}
.row.left {
  justify-content: flex-start;
}
.row.m-b {
  margin-bottom: 1%;
}
.card.end {
  align-items: flex-end;
}
.sticky {
  /* max-width: 1024px;
  width: 100%; */
  margin: auto;
  position: fixed;
  z-index: 10;
}
.sticky.side {
  top: 60vh;
}
.sticky.bottom {
  bottom: 1vh;
  margin-left: 5px;
}
.float-btn {
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1.2rem;
  cursor: pointer !important;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
