// composables/useBoard.ts
import { ref } from "vue";

interface Post {
  id: number
  title: string
  content: string
}

export const useBoard = () => {
  const boards = useState<Post[]>("boards", () => []);
  const error = ref("");

  const fetchBoards = async () => {
    try {
      const { data } = await useFetch<Post[]>("/api/board");
      boards.value = data.value || [];
    } catch (err: any) {
      error.value = err?.data?.message || "불러오는 데 실패했습니다.";
    }
  };

  return { boards, fetchBoards, error };
};
