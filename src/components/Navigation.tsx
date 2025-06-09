'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from "next/link"

export const Navigation = () => {

    const session = useSession()
    
    return <>
        <nav>
            <ul>
                {session?.data ? (<li>
                        <Link href='#' onClick={() => signOut({callbackUrl: "/"})}>Sign Out</Link>
                    </li>) : (<li>
                        <Link href='/api/auth/signin'>Sign In</Link>
                    </li>)}
                {session?.data ? <li>Logged as {session?.data?.user?.email}</li> : ''}
            </ul>
        </nav>
    </>
}