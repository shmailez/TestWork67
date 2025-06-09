'use client'
import { useSession } from 'next-auth/react'
import styles from '../app/page.module.scss'

export default function Footer() {

    const session = useSession()
    const year = new Date().getFullYear();

    return <>
        <footer className={styles.footer}>
           @{year} {session?.data ? `Logged as ${session?.data?.user?.email}` : ''}
        </footer>
    </>
}