import { useRequestEvent } from "nuxt/app"

export default defineEventHandler(async (event) => {
    
    //event.context.params
    return new Date().toLocaleString()
})