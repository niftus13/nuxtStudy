import { Ckeditor } from "@ckeditor/ckeditor5-vue"
import type { Plugin } from "vue";



export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Ckeditor as unknown as Plugin);
});