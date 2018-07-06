<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view v-if="ready" />
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
      return this.$store.state.ready && this.$store.state.image.ready && this.$store.state.item.ready
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
      this.$store.dispatch('image/init')
      this.$store.dispatch('item/init')
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
