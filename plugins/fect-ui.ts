import Fect from '@fect-ui/vue/lib'
import Icon from '@fect-ui/vue-icons'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Fect)
  nuxtApp.vueApp.use(Icon)
})
