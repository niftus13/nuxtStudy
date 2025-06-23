<template>
  <client-only>
    <ckeditor
      v-model="modelValue"
      :editor="ClassicEditor"
      :config="editorConfig"
      @ready="onReady"
    />
  </client-only>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

// Props: allow v-model from parent
const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const editorConfig = computed(() => ({
  toolbar: [
    'heading', '|',
    'bold', 'italic', 'link',
    'bulletedList', 'numberedList', '|',
    'imageUpload', '|',
    'undo', 'redo'
  ],
  simpleUpload: {
    uploadUrl: '/api/upload' // your image upload endpoint
  }
}))

const onReady = (editor: any) => {
  console.log('CKEditor is ready', editor)
}

// Watch and sync v-model
watch(() => props.modelValue, (val) => {
  modelValue.value = val
})
const modelValue = ref(props.modelValue)

watch(modelValue, (val) => {
  emit('update:modelValue', val)
})
</script>