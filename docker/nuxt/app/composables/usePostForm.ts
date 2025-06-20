


export const usePostForm = (options?: {
  initial?: { title?: string; content?: string };
  postId?: number;
}) => {
  const title = ref(options?.initial?.title || "");
  const content = ref(options?.initial?.content || "");
  const error = ref("");
  const router = useRouter();

  const submit = async () => {
    if (!title.value || !content.value) {
      error.value = "제목과 내용을 입력하세요";
      return;
    }

    try {
      const isEdit = !!options?.postId;
      const url = isEdit ? `/api/board/${options.postId}` : "/api/board";
      const method = isEdit ? "PUT" : "POST";

      await $fetch(url, {
        method,
        body: {
          title: title.value,
          content: content.value,
        },
      });

      alert(isEdit ? "수정 완료!" : "작성 완료!");
      router.push(isEdit ? `/board/${options.postId}` : "/board");
    } catch (err: any) {
      error.value = err?.data?.message || "처리 중 오류 발생";
    }
  };

  return {
    title,
    content,
    error,
    submit,
  };
};
