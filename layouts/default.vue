<template>
  <div>

    <header class="header">
      <div class="header__left"></div>

      <div class="header__right">
        <nuxt-link class="link" to="/">About</nuxt-link>
        <!-- <nuxt-link class="link" to="/experience">Experience</nuxt-link> -->
        <!-- <nuxt-link class="link" to="/projects">Projects</nuxt-link> -->
        <ToggleTheme />
      </div>
    </header>

    <Nuxt />

  </div>
</template>

<script>
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  components: {
    ToggleTheme
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  a {
    font-size: 0.8rem;
    margin-top: -5px;
    margin-right: 20px;
    color: var(--body-color);

    &:hover {
      color: var(--link-color);
    }
  }

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}
</style>
