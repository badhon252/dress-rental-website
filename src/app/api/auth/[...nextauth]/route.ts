import { authOptioins } from "@/lib/auth"
import NextAuth from "next-auth"

const handler = NextAuth(authOptioins)

export { handler as GET, handler as POST }