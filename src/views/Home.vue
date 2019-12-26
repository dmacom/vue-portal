<template>
  <div class="home">
    <div ref="hover" class="hover">
      <img ref="logo" class="hover__logo" src="../assets/img/logo-branca.png" alt="Logo">
      <p ref="title" class="hover__title">Portal de Meio ambiente da UFRN</p>
    </div>
    <div>
      <Hero />
      <Politica />
      <Quem />
      <Cartilhas />
      <Pesquisas />
      <RedesSociais />
      <Contato />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/home/Hero.vue"
import Politica from "@/components/home/Politica.vue"
import Quem from "@/components/home/Quem.vue"
import Cartilhas from "@/components/home/Cartilhas.vue"
import Pesquisas from "@/components/home/Pesquisas.vue"
import RedesSociais from "@/components/home/RedesSociais.vue"
import Contato from "@/components/home/Contato.vue"

import { TimelineLite } from 'gsap'

export default {
  name: 'home',
  components: {
    Hero,
    Politica,
    Quem,
    Cartilhas,
    Pesquisas,
    RedesSociais,
    Contato
  },
  created() {
    document.title = "Portal de meio ambiente da UFRN | Home"
  },
  // mounted() {
  //   const { hover, logo, title } = this.$refs;

  //   const tl = new TimelineLite({ delay: 1.5 })

  //   tl.from(logo, 2, { opacity: 0 })
  //   tl.from(title, 1, { opacity: 0, y: 50 })
  //   tl.to(hover, .5, { height: 0 })
  //   tl.to(logo, 0, { opacity: 0 })
  //   tl.to(title, 0, { opacity: 0 })
  // }
};
</script>

<style lang="scss" scoped>
.hover {
  width: 100%;
  height: 100%;
  background: $d-color-1;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__logo {
    max-width: 60px;
    padding-bottom: 20px;
  }
  &__title {
    @include p-type('mid', 1, 300, $branco);
  }
}
</style>