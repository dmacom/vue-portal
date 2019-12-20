<template>
  <footer class="footer">
    <div class="footer__contact">
      <Logo branco="true" class="footer__contact-logo" />
      <p>(84) 3342-2399 - Ramal 501</p>
      <p>Celular/WhatsApp: (84) 99474-6790</p>
      <p>E-mail: dmainfra@gmail.com</p>
    </div>
    <div class="footer__media">
      <Social branco="true" />
    </div>
    <div class="footer__colabore">
      <p>Quer trocar uma ideia com a gente?</p>
      <Btn link="/"/>
    </div>
    <div class="footer__copy">
      <p>
        <span class="copyright">© 2019 </span>
        <span>Dma Comunica</span>
      </p>
    </div>
  </footer>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.footer {
  color: #fff;
  background-color: $d-color-1;
  display: grid;
  grid: "contact media colabore"
        "copy copy copy"
        / 1fr 1fr 1fr;
  &__contact {
    grid-area: contact;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-logo {
      padding-top: 20px;
      padding-bottom: 10px;
    }
    p {
      @include center;
      @include p-type("smaller", 1, 300, #fff);
      padding-top: 10px;
    }
  }
  &__media {
    grid-area: media;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__colabore {
    grid-area: colabore;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      @include p-type('small', 1, 300, $branco);
      padding-bottom: 10px;
    }
  }
  &__copy {
    width: 100%;
    grid-area: copy;
    display: flex;
    align-self: center;
    padding: 20px;
    border-top: 2px solid #FFF;
    margin-top: 20px;
    p {
      @include center;
      @include p-type("smaller", 1, 300, #fff);
    }
  }
}
</style>