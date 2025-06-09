import { authCoufig } from "@/configs/auth"
import nextAuth from "next-auth"

const handler = nextAuth(authCoufig) 

export {handler as GET, handler as POST}