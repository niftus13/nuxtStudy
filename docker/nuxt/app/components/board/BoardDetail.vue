<template>
    <div>
        <h2>BoardDetail</h2>

        <div v-if="post">
            <h1>{{ post.title }}</h1>
            <p>{{ post.content }}</p>


            <div class="actions">
              <NuxtLink :to="`/board/${post.id}/edit`">
                <button>수정하기</button>
              </NuxtLink>

              <button @click="deletePost">삭제하기</button>
          </div>
        </div>
        <p v-if="error" class="error">오류 발생 : {{ error.message }}</p>
    </div>
</template>

<script setup lang="ts">
interface Post {
  id: number
  title: string
  content: string
}

const router = useRouter()

const props = defineProps<{
    id:number,
}>()

const { data: post, error } = await useFetch<Post>(
  () => `/api/board/${props.id}`
)

const deletePost = async() => {
  const ok = confirm('정말 삭제하시겠습니까?')
  if (!ok) return
  try {
    await $fetch(`/api/board/${props.id}`, {
      method: 'DELETE',
    })
    alert('삭제되었습니다.')
    router.push('/board')
  } catch (err: any) {
    alert(err?.data?.message || '삭제 중 오류 발생')
  }
}


</script>

<style lang="scss" scoped>

</style>