<template>
  <section class="redes-sociais">
    <h1 class="redes-sociais__title">Veja o que tá rolando nas nossas redes sociais</h1>
    <div class="redes-sociais__items">
      <p class="redes-sociais__subtitle">Instagram - @dmaufrn</p>
      <div class="ig-frame"></div>
      <div class="ig-frame"></div>
      <div class="ig-frame"></div>
      <div class="ig-frame"></div>
      <div class="ig-frame"></div>
      <div class="ig-frame"></div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.redes-sociais {
  background: $d-color-1;
  padding: 80px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: start;
  &__title {
    @include p-type('big', 1, 700, $branco);
    grid-column: 2 / 12;
    text-align: left;
    padding-bottom: 60px;
  }
  &__subtitle {
    @include p-type('mid', 1, 700, $branco);
    grid-column: 1 / -1;
    padding: 10px;
    justify-self: left;
  }
  &__items {
    grid-column: 2 / 12;
    display: grid;
    grid-template-columns: repeat(3, 200px);
    justify-content: center;
    .ig-frame {
      box-sizing: border-box;
      width: 95%;
      height: 200px;
      margin: 10px;
      background: $d-color-2;
    }
  }
}
</style>