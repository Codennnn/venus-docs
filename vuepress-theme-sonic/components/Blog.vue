<template>
  <main class="blog">
    <blog-list
      v-show="isBlog"
      :blog-items="blogItems"
    />
    <blog-content
      v-show="!isBlog"
      :blog-items="blogItems"
    />
  </main>
</template>

<script>
import BlogList from '@theme/components/BlogList.vue'
import BlogContent from '@theme/components/BlogContent.vue'

export default {
  name: 'Blog',
  props: ['blogItems'],
  components: { BlogList, BlogContent },
  computed: {
    isBlog() {
      return this.$page.path === '/blog/'
    },
  },
}
</script>

<style lang="stylus" scoped></style>