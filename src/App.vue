<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Grid</router-link> |
      <router-link to="/swiper">Swiper</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <keep-alive v-if="ready" include="grid">
      <!-- <div v-if="ready"> -->
      <router-view />
      <!-- </div> -->
    </keep-alive>
    <div v-else>
      <img src="https://images.schoolofmotion.com/w950/57723666-611a-4e73-9b84-45d4d9ee4045/Simple_Colors.gif" style="width: 300px;" />
      <div>Loading...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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
      }, 1000)
    },
    init() {
      this.$store.dispatch('init')
      // this.$store.dispatch('image/init')
      // this.$store.dispatch('item/init')
      this.$store.dispatch('card/init')
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  height: 3%;
  display: flex;
  margin: 1% auto;
  max-width: 1220px;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  /* font-size: 5vw; */
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.row {
  width: 100%;
  display: flex;
  align-items: center;
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
/* .card img {
  border-radius: 12px;
  width: 93%;
  height: 93%;
} */
</style>
