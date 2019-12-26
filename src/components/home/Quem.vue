<template>
    <section class="quem">
      <h2 class="quem__title title">...e quem está à frente de tudo isso</h2>
      <div class="quem__items">
        <router-link to="/" class="quem__item item">
          <p class="item__title left">UFRN e o meio ambiente</p>
          <div class="item__img right">
            <img src="../../assets/img/reitoria.jpg" alt="Reitoria">
          </div>
        </router-link>
        <router-link to="/" class="quem__item item">
          <p class="item__title right">Superintendência de infraestrutura</p>
          <div class="item__img left">
            <img src="../../assets/img/infra.jpg" alt="Superintendência de infraestrutura"> 
          </div>
        </router-link>
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
  background: $d-color-1;
  padding: 80px 0;
  &__title {
    @include p-type("giant", 1, 700, white);
    opacity: .4;
    grid-column: 2 / -1;
    justify-self: left;
  }
  &__items {
    grid-column: 2 / 12;
  }
  .item {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 60px;
    align-items: center;
    .right {
      grid-column: 2 / -1;
    }
    .left {
      grid-column: 1 / 4;
    }
    &__title {
      z-index: 2;
      grid-column: 1 / 4;
      grid-row: 1;
      @include p-type('giant', 1, 700, $branco);
      text-transform: uppercase;
    }
    &__img {
      overflow: hidden;
      grid-column: 2 / -1;
      grid-row: 1;
      width: 100%;
      width: 750px;
      height: 480px;
      img {
        filter: brightness(80%);
        transition: 1.5s;
        &:hover {
          filter: brightness(100%);
          transform: scale(1.03);
        }
      }
    }
  }
}
</style>