<template>
  <div class="theme-icon" title="change theme">
    <sun size="18" @click="clickHandler" v-show="theme === 'light-theme'" />
    <moon size="18" @click="clickHandler" v-show="theme === 'dark-theme'" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ThemeIcon',
  props: {
    theme: String,
  },
  emits: ['click'],
  setup(props, { emit }) {
    const clickHandler = (e: MouseEvent) => emit('click', e)

    return {
      clickHandler,
    }
  },
}
</script>

<style scoped>
.theme-icon {
  margin-left: auto;
}
</style>
