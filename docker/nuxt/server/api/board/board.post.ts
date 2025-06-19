import { prisma } from "../../lib/prisma";


export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    if (!body.title || !body.content) {
      throw createError({
        statusCode: 400,
        statusMessage: "제목과 내용은 필수입니다.",
      });
    }

    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return post;
})