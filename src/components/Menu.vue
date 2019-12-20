<template>
  <div class="menu">
    <div class="menu__compressed" :class="{ 'menu__compressed--hidden': menuOpen }" @click="menuOpen = !menuOpen">
      <p class="menu__text" :class="{ 'menu__text--hidden': menuOpen }">Menu</p>
      <div class="menu__burguer burguer">
        <span class="burguer__item" :class="{ 'burguer__item--d1': menuOpen }"></span>
        <span class="burguer__item" :class="{ 'burguer__item--hidden': menuOpen }"></span>
        <span class="burguer__item" :class="{ 'burguer__item--d2': menuOpen }"></span>
      </div>
    </div>
    <transition>
    <div v-show="menuOpen" class="menu__open open" :class="{ 'menu__open--activate': menuOpen }">
      <div class="open__wrapper">
        <div class="open__campanha">
          <img :src="require('@/assets/img/icons/campanha-icon.png')" alt="Campanha" class="open__campanha-img">
          <span class="open__campanha-text">Coleta seletiva solidária da UFRN</span>
        </div>
        <nav class="open__nav">
          <ul class="open__nav-items">
            <router-link to="/" tag="li" class="open__router">Política ambiental</router-link>
            <router-link to="/about" tag="li" class="open__router">UFRN e o meio ambiente</router-link>
            <router-link to="/" tag="li" class="open__router">Infra</router-link>
            <router-link to="/" tag="li" class="open__router">Pesquisas</router-link>
            <router-link to="/" tag="li" class="open__router">O que fazemos</router-link>
            <Btn class="open__router--btn" link="/"/>
          </ul>
        </nav>
        <Social />
      </div>
    </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: "Menu",
  data() {
    return {
      menuOpen: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  &__compressed {
    position: relative;
    z-index: 3;
    align-self: flex-end;
    display: flex;
    background: $p-color-2;
    padding: 10px 15px;
    border-radius: 40px;
    transition: all .4s ease;
    cursor: pointer;
    &--hidden {
      background: transparent;
    }
  }
  &__text {
    @include p-type("small", 1, 500, white);
    margin-right: 7px;
    padding-top: 4px;
    transform: translateX(0);
    transition: transform .5s ease;
    &--hidden {
      transform: translateX(20px);
      transition: transform .5s ease-out;
      width: 0;
      visibility: hidden;
    }
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
      margin: 3px;
      transform: rotate(0deg);
      transition: all .5s ease-out;
      &--d1 {
        background: $p-color-2;
        transform-origin: right center;
        transform: translate3d(-4px, -3px, 0) rotate(-45deg);
        padding-right: 10px;
      }
      &--d2 {
        background: $p-color-2;
        transform-origin: right center;
        transform: translate3d(-4px, 0, 0) rotate(45deg);
        padding-right: 10px;
      }
      &--hidden {
        width: 0%;
        opacity: 0;
      }
    }
  }

  .open {
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    padding: 80px 80px 30px 80px;
    @include shadow;
    background: white;
    
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
      @include p-type("mid", 1.2, 100, $d-color-1);
      margin: 5px 0;
      max-width: 250px;
      opacity: .9;
      cursor: pointer;
      transition: all .2s ease;
      &:hover {
        transform: scale(1.1);
        opacity: 1;
        color: $p-color-2;
      }
      &--btn {
        align-self: center;
        margin-top: 30px;
      }
    }
  }
}

.v-enter-active, .v-leave-active {
  transition: all .5s ease-out;
}
.v-enter, .v-leave-to /* .v-leave-active below version 2.1.8 */ {
  transform: translate3d(100%, 0, 0);
}
</style>