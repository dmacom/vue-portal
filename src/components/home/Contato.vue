<template>
  <section class="contato">
    <img class="contato__img" src="../../assets/img/contact.png" alt="Contato">
    <div class="contato__cta">
      <p class="contato__texto">Caso tenha alguma <b>dúvida</b> ou <b>sugestão</b>, <b>crítica</b> ou <b>elogio</b>, mande uma mensagem para a gente.</p>
      <Btn class="contato__btn" link="/" />
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contato {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  justify-items: center;
  &__img {
    grid-column: 2 / 7;
    padding: 40px;
  }
  &__cta {
    grid-column: 7 / 12;
  }
  &__texto {
    padding-bottom: 20px;
    @include p-type(1.35rem, 1.3, 300, $d-color-1);
  }
}
</style>