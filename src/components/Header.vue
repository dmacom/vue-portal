<template>
  <header class="header">
    <Logo />
    <Menu> 
      <ul class="open__nav-items">
        <router-link to="/" tag="li" class="open__router">Home</router-link>
        <router-link to="/" tag="li" class="open__router">Infra</router-link>
        <router-link to="/" tag="li" class="open__router">Política ambiental</router-link>
        <router-link to="/" tag="li" class="open__router--btn">Colabore</router-link>
      </ul>
    </Menu>
  </header>
</template>

<script>
import Logo from "@/components/Logo.vue"
import Menu from "@/components/Menu.vue"

export default {
  components: {
    Logo, 
    Menu
  }
}
</script>

<style lang="scss" scoped>
  .header {
    @include container;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
  }
</style>