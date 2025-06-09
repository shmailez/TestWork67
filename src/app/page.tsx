import Products from "@/components/Products";
import styles from "./page.module.scss"

export default function Home() {
  return (
    <div className={styles.page}>
        <Products/>
    </div>
  );
}
