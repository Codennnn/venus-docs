<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <section class="hero">
      <div class="hero-left">
        <h1
          v-if="data.heroText !== null"
          class="main-title"
          v-html="data.heroText"
        />

        <p
          v-if="data.tagline !== null"
          class="description"
        >
          {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </p>

        <p class="action">
          <NavLink
            v-if="data.startActionText && data.startActionLink"
            class="action-button start"
            :item="startAction"
          />
          <NavLink
            v-if="data.demoActionText && data.demoActionLink"
            class="action-button demo"
            :item="demoAction"
          />
        </p>
      </div>

      <div class="banner">
        <img
          class="banner-img"
          src="/banner.png"
          alt="banner"
        >
        <div class="bg"></div>
      </div>

    </section>

    <section
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </section>

    <Content class="theme-default-content custom" />
    <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter
    },

    startAction() {
      return {
        link: this.data.startActionLink,
        text: this.data.startActionText,
      }
    },

    demoAction() {
      return {
        link: this.data.demoActionLink,
        text: this.data.demoActionText,
      }
    },
  },
}
</script>

<style lang="stylus">
.home
  max-width $homePageWidth
  margin 0px auto
  padding $navbarHeight 2rem 0
  display block

  .hero
    position relative
    min-height 90vh - $navbarHeight
    display flex
    align-items center

    .hero-left
      position relative
      z-index 100

      .main-title
        margin 0
        font-size 3.2rem

        .highlight
          color $accentColor

      .description
        max-width 26rem
        margin 1.5rem 0
        font-size 1.1rem
        line-height 1.8
        color $textGrayColor
        box-sizing border-box

      .action-button
        display inline-block
        padding 0.6rem 2rem
        border-radius 0.5rem
        transition background-color 0.3s
        box-sizing border-box

        &.start
          margin-right 0.8rem
          color #fff
          background-color $accentColor

          &:hover
            background-color lighten($accentColor, 30%)

        &.demo
          color #6d580c
          background-color #ffda5b

          &:hover
            background-color lighten(#ffda5b, 30%)

  .banner
    position relative
    z-index 10
    margin-left 5rem
    flex 1

    &-img
      position relative
      z-index 10
      width 100%
      border-radius 1rem
      box-shadow 0 5px 20px rgba(0, 0, 0, 0.1)

    .bg
      content ''
      position absolute
      bottom -40%
      left 25%
      transform-origin 0% 100%
      transform rotateZ(-20deg) scale(4, 4)
      width 1000px
      height 1000px
      background-color lighten($accentColor, 92%)
      border-radius 0.8rem

      &::before
        content ''
        position absolute
        top -6px
        right -7px
        width 1000px
        height 1000px
        background-color $accentColor
        border-radius 0.8rem

  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between

  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%

    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)

    p
      color lighten($textColor, 25%)

  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width 1200px)
  .home
    .bg
      display none

    .description
      min-width 100%

@media (max-width $MQMobile)
  .home
    .hero
      text-align center

      .hero-left
        width 100%
        display flex
        flex-direction column
        justify-content center

      .description
        min-width 100%
        margin-left auto
        margin-right auto
        font-size 1rem

    .banner
      display none

    .features
      flex-direction column

    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem

    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem

      h1
        font-size 2rem

      h1,
      .description,
      .action
        margin 1.2rem auto

      .description
        font-size 1rem

      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem

    .feature
      h2
        font-size 1.25rem
</style>
