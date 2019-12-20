<template>
  <div class="home">
    <Hero />
    <Politica />
    <Quem />
    <Cartilhas />
    <Pesquisas />
  </div>
</template>

<script>

import Hero from "@/components/home/Hero.vue"
import Politica from "@/components/home/Politica.vue"
import Quem from "@/components/home/Quem.vue"
import Cartilhas from "@/components/home/Cartilhas.vue"
import Pesquisas from "@/components/home/Pesquisas.vue"

export default {
  name: 'home',
  components: {
    Hero,
    Politica,
    Quem,
    Cartilhas,
    Pesquisas
  },
  created() {
    document.title = "Portal de meio ambiente da UFRN | Home"
  }
};
</script>

<style lang="scss" scoped>
</style>