<template>
  <header class="header">
    <Logo />
    <Menu> 
    </Menu>
  </header>
</template>

<script>
import Menu from "@/components/Menu.vue"

export default {
  components: {
    Menu
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
    // @include container;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 2.5%;
  }
</style>