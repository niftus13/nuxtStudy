
export const usePostForm = () => {
  const title = ref("");
  const content = ref("");
  const error = ref("");
  const router = useRouter();

  const createPost = async () => {
    if (!title.value || !content.value) {
      error.value = "제목과 내용을 입력하세요";
      return;
    }

    try {
      await $fetch("/api/board", {
        method: "POST",
        body: {
          title: title.value,
          content: content.value,
        },
      });
      router.push("/board");
    } catch (err: any) {
      error.value = err?.data?.message || "게시글 작성 중 오류가 발생했습니다.";
    }
  };

  return {
    title,
    content,
    error,
    createPost,
  };
};