<template>
  <div>
    <layout>
      <blog-article />
    </layout>
  </div>
</template>

<script lang="ts">
import Layout from './components/layout/index.vue'
import Aritcle from './components/article/index.vue'
export default defineComponent({
  components: { Layout, [Aritcle.name]: Aritcle },
  setup(props, { slots }) {},
})
</script>
