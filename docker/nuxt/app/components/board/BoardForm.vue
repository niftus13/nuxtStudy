<template>
  <div>
    <h1>{{ isEdit ? '게시글 수정' : '게시글 작성' }}</h1>

    <form @submit.prevent="onSubmit">
      <input v-model="form.title" placeholder="제목" />
      <textarea v-model="form.content" placeholder="내용" />
      <button type="submit">{{ isEdit ? '수정' : '등록' }}</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  initial?: { title: string; content: string }
  isEdit?: boolean
}>()

const emit = defineEmits<{
  (e: 'submit', data: { title: string; content: string }): void
}>()

const form = reactive({
  title: props.initial?.title || '',
  content: props.initial?.content || ''
})


const error = ref('')

function onSubmit() {
  if (!form.title || !form.content) {
    error.value = '제목과 내용을 입력하세요'
    return
  }

  emit('submit', {
    title: form.title,
    content: form.content
  })
}

</script>

<style scoped>
input, textarea {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>