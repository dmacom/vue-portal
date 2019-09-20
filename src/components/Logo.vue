<template>
<div class="logo">
  <img class="logo__img" src="@/assets/img/logo.png" alt="Logo">
  <p class="logo__text">Portal de meio ambiente<br />da UFRN</p>
</div>
</template>

<script>
export default {
  name: "Logo",
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  &__img {
    height: 40px;
    padding-right: 10px;
  }
  &__text {
    @include p-type("small", 1.2, 500, $p-color-1);
    text-align: left;
    padding-left: 10px;
    border-left: 2px solid $p-color-1;
  }
}
</style>