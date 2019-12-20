<template>
  <section class="politica">
    <h2 class="politica__title">Conheça nossa política ambiental...</h2>
    <p class="politica__paragraph">A Política Ambiental da Ufrn é instituída como um conjunto de princípios e diretrizes que visam implantar ou regulamentar ações institucionais com o objetivo de promover o desenvolvimento sustentável na UFRN e na sociedade, na perspectiva de um ambiente saudável e ecologicamente equilibrado, tendo por princípios o desenvolvimento sustentável para resiliência econômica, integridade e justiça socioambiental, bem-estar social e governança democrática, a participação democrática e inclusiva, a transparência no acesso à informação, cooperação mútua com a comunidade interna e externa, integração de saberes no planejamento e na gestão das suas ações, o respeito às especificidades e estímulo ao desenvolvimento socioambiental local e a valorização do conhecimento produzido na universidade.</p>
    <router-link class="politica__link" to="/" tag="a">Veja mais sobre nossa política ambiental</router-link>
  </section>
</template>

<script>
export default {
  name: "Politica",
}
</script>

<style lang="scss" scoped>

  .politica {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 80px 0;
    background: $d-color-1;
    &__title {
      @include p-type("giant", 1, 700, white);
      opacity: .4;
      grid-column: 2 / -1;
      padding-bottom: 120px;
      justify-self: left;
    }
    &__paragraph {
      @include p-type('small', 1.3, 300, white);
      grid-column: 1 / -1;
      max-width: 600px;
      justify-self: center;
      text-align: left;
      padding-bottom: 120px;
      opacity: .8;
    }
    &__link {
      @include p-type('smaller', 1.5, 300, white);
      grid-column: 1 / 12;
      text-align: right;
      text-decoration: none;
    }
  }
</style>