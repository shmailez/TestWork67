  import { users } from '@/data/users'
  import Credentials from 'next-auth/providers/credentials'
  
  export const authCoufig = {
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
      secret: process.env.NEXTAUTH_SECRET,
      pages: {signIn: '/signin'}
  }