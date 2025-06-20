import { prisma } from "~~/server/lib/prisma"


export default defineEventHandler (async(event) => {
    const id = Number(event.context.params?.id)
    const method = event.node.req.method;
    if (isNaN(id)) {
      throw createError({ statusCode: 400, statusMessage: "Invalid ID" });
    }
    

    if (method === 'GET') {
      // 상세 조회
      const post = await prisma.post.findUnique({ where: { id } });
      if (!post) {
        throw createError({
          statusCode: 404,
          statusMessage: "게시글이 없습니다.",
        });
      }
      return post;
    }

    if(method === 'PUT'){
        //수정
        const body = await readBody(event)
        const {title, content} = body
        return await prisma.post.update({
            where: {id},
            data : {title, content}
        })
    }

    if(method === 'DELETE'){
        return await prisma.post.delete({
            where:{id},
        })
    }

    throw createError({
      statusCode: 405,
      statusMessage: "허용되지 않은 요청입니다.",
    });

})