'use client'
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react";
import styles from "../app/signin/page.module.scss"

export default function SignInForm() {
    const [error, setError] = useState('');
    const router = useRouter()

    const handlerSubmit = async (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined }) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')?.toString().trim() || '';
        const password = formData.get('password')?.toString().trim() || '';

        if (email.length < 3 || password.length < 3) {
            setError('Email и пароль должны быть не короче 3 символов.');
            return;
        }

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false
        })

        console.log(res)

        if (res && !res.error) {
            router.push("/");
          } else {
            setError('Неверное имя пользователя или пароль.');
            console.log(res);
          }
    }
    return <>
        <form className={styles.signForm} onSubmit={handlerSubmit}>
            <input type="email" name="email" required/>
            <input type="password" name="password" required/>
            <button type="submit">Sign In</button>
            {error && <p className={styles.signForm}>{error}</p>}
        </form>
    </>
}
