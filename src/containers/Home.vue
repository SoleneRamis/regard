<template>
  <div class="home">
    <div>
      <nav-bar class="navbar"></nav-bar>
      <merveilles></merveilles>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Merveilles from '../components/Merveilles'

export default {
  name: 'home',
  components: {
    NavBar,
    Merveilles
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    position: relative;
    .navbar {
        z-index: 1;
    }
  }
</style>
