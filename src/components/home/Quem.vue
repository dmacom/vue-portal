<template>
    <section class="quem">
      <h2 class="quem__title title">...e quem está à frente de tudo isso</h2>
      <div class="quem__items">
        <div class="quem__item quem__item-right">
          
        </div>
        <div class="quem__item quem__item-left"></div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.quem {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 80px 0;
    &__title {
      @include p-type("giant", 1, 700, $d-color-1);
      grid-column: 2 / -1;
    //   padding-bottom: 120px;
      justify-self: left;
    }
}
</style>