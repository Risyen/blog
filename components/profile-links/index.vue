<template>
  <div class="profile-links">
    <NuxtLink to="/about" v-for="(item, i) in links" :key="item">
      <fe-link>{{ item }}</fe-link>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ProfileLinks',
  setup() {
    const links = ref(['Notes', 'About', 'Project', 'Talk', 'Resume'])
    return { links }
  },
}
</script>

<style scoped>
.profile-links a {
  color: var(--accents-5);
  padding: var(--fay-gap-quarter);
  text-transform: uppercase;
  font-size: 0.8rem;
}
.profile-links a:hover {
  color: var(--fay-link-color);
}

.profile-links a:last-of-type {
  margin-right: 0;
}
</style>
