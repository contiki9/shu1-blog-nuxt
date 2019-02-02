<template>
  <div>
    <nav class="navbar header has-shadow is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/assets/images/common/logo.svg" alt="週1でブログ更新する会" height="28">
        </a>
        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <div class="main-content">
      <nuxt />

    </div>
  </div>

</template>

<script>
export default {


}
</script>




<style lang="scss">
  @import "~assets/scss/config/config";
  @import "~assets/scss/buefy";

</style>