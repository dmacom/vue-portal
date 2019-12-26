<template>
  <section class="hero">
    <div class="hero__title">
      <h1 ref="titleHero">Bem-vindo às<br><span class="hero__title--green">boas práticas</span></h1>
      <p ref="subtitleHero">Saiba agora como a gente lida com o <b>meio ambiente</b>!</p>
    </div>
    <div class="hero__img">
      <img ref="heroBig" class="hero__img--full" :src="require('@/assets/img/hero.png')" alt="Hero">
      <img class="hero__img--mobile" :src="require('@/assets/img/hero-mobile.png')" alt="Hero">
    </div>
    <div ref="scroll" class="hero__to-scroll to-scroll">
        <div class="scroll-icon"></div>
        <p>Role para baixo</p>
    </div>
  </section>
</template>

<script>
import { TimelineLite } from 'gsap';

export default {
  name: "Hero",
  data() {
    return {
    }
  },
  mounted() {
    const { titleHero, subtitleHero, heroBig, scroll } = this.$refs;

    const tl = new TimelineLite( { delay: .5 })

    tl.from(heroBig, 1, { opacity: 0 , y: 20 })
    tl.from(titleHero, 1, { opacity: 0, y: 20 })
    tl.from(subtitleHero, .5, { opacity: 0 })
    tl.from(scroll, 1.5, { opacity: 0, y: -10 })
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 2fr 6fr 2fr;
    align-items: center;

    position: relative;
    &__title {
      position: absolute;
      align-self: center;
      grid-column-start: 2;
      padding-left: 30px;
      text-align: left;
      h1 {
        @include p-type("giant", 0.8, 400, $d-color-1);
      }
      &--green {
        @include p-type("giant", 0.8, 700, $p-color-1);
      }
      p {
        padding-top: 20px;
        @include p-type("smaller", 0.8, 600, $d-color-2);
        opacity: .6;
      }
    }
    &__img {
      grid-column: 1 / -1;
      padding: 0 5%;
      grid-row: 2; 
      width: 100%;
      &--mobile {
        display: none;
      }
    }
    &__to-scroll {
      grid-column: 1 / -1;
      grid-row: 3;
    }

    .to-scroll {
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: .7;

      .scroll-icon {
        width: 15px;
        height: 30px;
        border: 2px solid rgba(0, 0, 0, .5);
        border-radius: 8px;
        display: flex;
        justify-self: center;
        box-sizing: border-box;
        &::after {
          content: '';
          display: block;
          transform: translate3d(4.5px, 5px, 0);
          border-radius: 1px;
          width: 2px;
          height: 7px;
          background: rgba(0, 0, 0, .7);

          -webkit-animation-name: scrollAnimation; /* Safari 4.0 - 8.0 */
          -webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
          animation-name: scrollAnimation;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: ease-in;
      
          /* Safari 4.0 - 8.0 */
          @-webkit-keyframes scrollAnimation {
              0% {transform: translate3d(4.5px, 5px, 0);}
              100% {transform: translate3d(4.5px, 15px, 0);}
          }
      
          /* Standard syntax */
          @keyframes scrollAnimation {
              0% {transform: translate3d(4.5px, 5px, 0);}
              100% {transform: translate3d(4.5px, 15px, 0);}
          }
        }
      }
      p {
        margin-top: 10px;
        @include p-type('smaller', 1, 500, $d-color-1);
      }
    }
  }
</style>