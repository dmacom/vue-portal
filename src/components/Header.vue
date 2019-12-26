<template>
  <header class="header">
    <Logo ref="logoMenu" />
    <Menu ref="menu" />
  </header>
</template>

<script>
import Menu from "@/components/Menu.vue"
import { TimelineLite } from 'gsap'

export default {
  components: {
    Menu
  },
  mounted() {
    // const { logoMenu, menu } = this.$refs;

    // const tl = new TimelineLite()

    // tl.from(logoMenu, 0.3, { y: 30 })
    // tl.from(menu, 0.3, { y: 30 })
  }
}
</script>

<style lang="scss" scoped>
  header.header {
    position: fixed;
  }
  .header {
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 2.5%;
  }
</style>