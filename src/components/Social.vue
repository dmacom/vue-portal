<template>
  <div class="media">
    <a v-for="(media, key) in links" :key="key" :href="media.link" target="_blank" class="media__item">
      <img :src="require(`@/assets/img/icons/media/${media.imgBlack}`)" :alt="media.alt" class="media__img">
      </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        facebook: {
          link: "https://www.facebook.com/dmacomunica/",
          alt: "Facebook",
          imgWhite: "facebook--white.png",
          imgBlack: "facebook--black.png"
        },
        instagram: {
          link: "https://www.instagram.com/dmaufrn/?hl=pt-br",
          alt: "Instagram",
          imgWhite: "instagram--white.png",
          imgBlack: "instagram--black.png"
        }
      }
    }
  }
}
</script>

<style lang="scss" scopped>
.media {
  display: flex;
  justify-content: center;
  &__item {
    margin: 0 10px;
  }
  &__img {
    max-width: 40px;
  }
}
</style>