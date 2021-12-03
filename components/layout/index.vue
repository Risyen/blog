<template>
  <div class="layout">
    <div class="layout__container">
      <fe-spacer />
      <theme-icon :theme="theme" @click="themeChange" />
      <Profile />
      <fe-spacer />
      <slot />
      <fe-spacer :y="4" />
      <concat />
    </div>
  </div>
</template>

<script lang="ts">
import { useTheme } from '@fect-ui/vue/lib/utils'
import Profile from '../profile/index.vue'
import Concat from '../concat/index.vue'
import ThemeIcon from '../theme-icon/index.vue'
import { createLayoutContext } from './use-layout-context'
import BLOGCONFIG from '~/blog.config'
export default {
  components: { Profile, ThemeIcon, Concat },
  setup() {
    const { theme, themeChange } = useTheme()

    const { provider } = createLayoutContext()

    provider(BLOGCONFIG)

    return { theme, themeChange }
  },
}
</script>

<style lang="css" scoped>
.layout {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
.layout__container {
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
}
@media only screen and (max-width: 767px) {
  .layout__container {
    max-width: 88vw;
    min-height: 100vh;
  }
}
</style>
