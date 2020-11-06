<template>
  <main class="blog">
    <div class="bg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1205 918"
      >
        <path
          fill="rgba(100, 133, 255, 0.05)"
          fill-rule="evenodd"
          d="M786.762 81.215c-5.731 0-11.435.12-17.11.348-106.873 4.14-114.975-2.673-172.065-38.455C555.367 15.836 505.072 0 451.077 0 325.84 0 220.502 85.158 189.724 200.742c-19.29 66.98-24.02 74.033-83.435 121.661l.01.005C41.498 374.42 0 454.288 0 543.865 0 700.6 127.012 827.66 283.69 827.66c26.16 0 51.486-3.559 75.539-10.19 81.736-20.874 101.626-24.156 209.346 39.146C632.095 895.55 706.808 918 786.762 918 1017.749 918 1205 730.68 1205 499.607c0-231.072-187.251-418.392-418.238-418.392"
          opacity="1"
        ></path>
      </svg>
    </div>

    <div class="content">
      <div>
        <h1 class="title">Blog</h1>
      </div>

      <section class="articles">
        <article>
          <RouterLink to="/">
            <h3>Gatsby Gazette for October 2020: The “How it Started…How it’s Going” Edition</h3>
          </RouterLink>
        </article>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Blog',
}
</script>

<style lang="stylus" scoped>
.blog
  position relative
  min-height 100vh
  padding-top $navbarHeight
  box-sizing border-box

  .bg
    position absolute
    top 0
    left 0
    overflow visible

    svg
      position absolute
      top 100px
      left -55vw
      height auto
      width calc(90vw + 25vh)
      transform rotateZ(20deg)
      animation animation-rotate 10s cubic-bezier(0.4, 0, 0.2, 1) infinite
      animation-delay 2s
      transform-origin center

  .content
    padding-top 6rem
    padding-left 12rem
    padding-right 2rem

    .title
      color $accentColor
      font-size 3rem

  .articles
    width 400px

@media (max-width $MQMobile)
  .blog
    .content
      padding 0 2rem
</style>