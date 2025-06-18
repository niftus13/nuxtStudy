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

  return { boards, fetchBoards, error}
};
