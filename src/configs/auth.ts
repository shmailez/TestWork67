import { users } from '@/data/users'
import { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const authCoufig : AuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: 'email', 
                    required: true
                },
                password: {
                    label: 'password', 
                    required: true
                }
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined) {
                if (!credentials?.email || !credentials.password) return null

                const currentUser = users.find(user => user.email === credentials.email)
                if (currentUser && currentUser.password === credentials.password) {
                    const {...userWithoutPass} = currentUser
                    return { id: currentUser.username, ...userWithoutPass }
                }
                return null
            }
        })
    ],

    callbacks: {
    async jwt({ token, user }) {
        if (user && typeof user === "object" && "username" in user) {
            token.username = user.username;
        }
        return token;
    },

    async session({ session, token }) {
        if (session.user) {
            session.user.name = token.username as string;
        }
        return session;
    },
},
    secret: process.env.NEXTAUTH_SECRET,
    pages: {signIn: '/signin'}
}