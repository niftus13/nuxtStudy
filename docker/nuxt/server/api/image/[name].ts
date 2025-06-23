import { createReadStream, existsSync } from "fs";
import { resolve } from "path";



export default defineEventHandler((event) => {
    const name = getRouterParam(event, 'name')!
    const path = resolve('uploads', name)



    if (!existsSync(path)) {
      throw createError({ statusCode: 404, statusMessage: "Not Found" });
    }

    setHeader(event, "Content-Type", "image/jpeg");
    return createReadStream(path);
})