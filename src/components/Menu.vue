<template>
  <div class="menu">
    <div @click="menuOpen = !menuOpen" class="menu__compressed">
      <p class="menu__text">Menu</p>
      <div class="menu__burguer burguer">
        <span class="burguer__item"></span>
        <span class="burguer__item"></span>
        <span class="burguer__item"></span>
      </div>
    </div>
    <div @click="menuOpen = !menuOpen" v-if="menuOpen" class="menu__open open">
      <div class="open__wrapper">
        <div class="open__campanha">
          <img :src="require('@/assets/img/icons/campanha-icon.png')" alt="Campanha" class="open__campanha-img">
          <span class="open__campanha-text">Coleta seletiva solidária da UFRN</span>
        </div>
        <nav class="open__nav">
          <slot></slot>
        </nav>
        <Social />
      </div>
    </div>
  </div>
</template>

<script>
import Social from "@/components/Social.vue"

export default {
  name: "Menu",
  components: {
    Social,
  },
  data() {
    return {
      menuOpen: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  &__compressed {
    align-self: flex-end;
    display: flex;
    background: $p-color-2;
    padding: 8px 10px;
    border-radius: 20px;
    cursor: pointer;
  }
  &__text {
    @include p-type("small", 1, 500, white);
    margin-right: 7px;
    padding-top: 1px;
  }
  &__burguer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .burguer {
    &__item {
      display: block;
      height: 3px;
      width: 30px;
      border-radius: 4px;
      background: white;
      margin: 2px;
    }
  }

  .open {
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    padding: 80px 30px 30px 30px;
    @include shadow;
    &__wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    &__campanha {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__campanha-img {
      max-width: 100px;
      margin-bottom: 15px;
    }
    &__campanha-text {
      @include p-type('small', 1.2, 500, $d-color-1);
      max-width: 250px;
    }
    &__nav-items{
      display: flex;
      flex-direction: column;
      justify-content: center;

    }
    &__router {
      @include p-type("medium", 1.5, 100, $d-color-1);
      &--btn {
        @include p-type("small", 1.5, 100, $p-color-2);
        align-self: center;
        padding: 5px 30px;
        border: 2px solid $p-color-2;
        background: transparent;
        border-radius: 50px;
        transition: all .4s ease;
        &:hover {
          background: $p-color-2;
          color: white;
        }
      }
    }
  }
}
</style>