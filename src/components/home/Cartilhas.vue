<template>
  <section class="cartilhas">
    <h1 class="cartilhas__title">Nossas cartilhas</h1>
    <ul class="cartilhas__lista">
        <li class="cartilhas__lista-item"></li>
        <li class="cartilhas__lista-item"></li>
        <li class="cartilhas__lista-item"></li>
    </ul>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cartilhas {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 80px 0;
    background-color: $d-color-1;
    &__title {
      @include p-type("giant", 1, 700, white);
      opacity: .4;
      grid-column: 2 / -1;
      padding-bottom: 80px;
      justify-self: left;
    }
    &__lista {
        grid-column: 1/-1;
        display: flex;
        justify-content: center;
        &-item {
            width: 300px;
            height: 400px;
            background-color:$d-color-2;
            margin: 0 25px;
        }
    }
}
</style>