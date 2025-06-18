// composables/useBoard.ts


export const useBoard = () => {
  const boards = useState("boards", () => [])
  const error = ref('')

  const fetchBoards = async () => {
    try{
      boards.value = await $fetch('/api/board')
    } catch (err:any){
      error.value = err?.data?.message || "불러오는 데 실패했습니다."
    }
  };

  if (process.client) {
    onMounted(fetchBoards);
  } else {
    onServerPrefetch(fetchBoards);
  }
  return { boards, fetchBoards, error}
};
