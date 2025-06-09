import SignInForm from "@/components/SignInForm";
import styles from "./../page.module.scss";

export default function SignIn() {
    return <div className={styles.page}>
        <h2>Login</h2>
        <SignInForm/>
    </div>
        
    
}