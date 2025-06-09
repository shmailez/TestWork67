import { Navigation } from "./Navigation";
import styles from '../app/page.module.scss'

export default function Header() {
    return <>
        <header className={styles.header}>
            <Navigation/>
        </header>
    </>
}