<template>
  <section class="pesquisas">
    <div class="pesquisas__text-wrapper">
      <h2 class="pesquisas__title">Nossas pesquisas</h2>
      <p class="pesquisas__text">Saiba como a UFRN está contribuindo para a solução de conflitos e temas de debate em relação à sustentabilidade e ao meio ambiente.</p>
      <router-link to="/" class="pesquisas__link">Descubra o que nós descobrimos</router-link>
    </div>
    <div class="pesquisas__img-wrapper">
      <img class="pesquisas__img" src="../../assets/img/pesquisa_meioambiente.png" alt="Pesquisas">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Pesquisas',
};
</script>

<style lang="scss" scoped>
.pesquisas {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 80px 0;
  &__text-wrapper {
    grid-column: 2 / 7;
    width: 100%;
    align-self: center;
    display: grid;
    flex-direction: column;
    align-content: space-between;
    height: 350px;
  }
  &__title {
    justify-self: start;
    max-width: 300px;
    text-align: left;
    @include p-type("giant", .9, 700, $d-color-1);
  }
  &__text {
    justify-self: center;
    text-align: left;
    max-width: 400px;
    @include p-type("small", 1.3, 300, $d-color-1);
  }
  &__link {
    justify-self: end;
    @include p-type("smaller", 1.3, 500, $d-color-1);
  }
  &__img-wrapper {
    grid-column: 7 / 12;
  }
  &__img {
    max-width: 400px;
  }
}
</style>
