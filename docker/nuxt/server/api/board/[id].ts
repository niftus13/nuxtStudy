import { prisma } from "~~/server/lib/prisma"


export default defineEventHandler (async(event) => {
    const id = parseInt(event.context.params?.id || '0')
    const post = await prisma.post.findUnique({
        where: {id},
    })

    return post
})