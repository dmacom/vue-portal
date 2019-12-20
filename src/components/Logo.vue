<template>
  <router-link to="/" class="logo" tag="div">
      <LogoVue class="logo__img" :branco="this.branco" :preto="this.preto"/>
      <p class="logo__text" :class="{ branco, preto }">Portal de meio ambiente<br />da UFRN</p>
  </router-link>
</template>

<script>
import LogoVue from "@/components/LogoSvg.vue";

export default {
  name: "Logo",
  props: ["branco", "preto"],
  components: {
    LogoVue
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  &__img {
    height: 40px;
    padding-right: 10px;
  }
  &__text {
    @include p-type("small", 1.2, 500, $p-color-1);
    text-align: left;
    padding-left: 10px;
    border-left: 2px solid $p-color-1;
    &.branco {
      color: #FFF;
      border-left: 2px solid #FFF;
    }
    &.preto {
      color: $d-color-1;
      border-left: 2px solid $d-color-1;
    }
  }
}
</style>