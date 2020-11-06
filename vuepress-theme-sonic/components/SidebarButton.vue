<template>
  <div
    class="sidebar-button"
    @click="$emit('toggle-sidebar')"
  >
    <i class="bx bx-menu-alt-left icon"></i>
  </div>
</template>

<style lang="stylus">
.sidebar-button
  position absolute
  top 0.89rem
  left 1rem
  width 1.8rem
  height 1.8rem
  display none
  cursor pointer

  .icon
    font-size 1.8rem

@media (max-width $MQMobile)
  .sidebar-button
    display flex
    justify-content center
    align-items center
</style>
