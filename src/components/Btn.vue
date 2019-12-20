<template>
  <router-link :to="link" class="btn">Colabore</router-link>
</template>

<script>
export default {
  props: ['link']
}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  color: white;
  padding: 10px 30px;
  border: 2px solid $p-color-1;
  border-radius: 50px;
  @include p-type("small", 1, 500, $p-color-1);
  transition: .3s;
  &:hover {
    background: $p-color-1;
    color: white
  }
}
</style>