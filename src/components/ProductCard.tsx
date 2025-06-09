import { useSession } from "next-auth/react";
import styles from "../app/page.module.scss";
import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

  const session = useSession();
  
  return (
    <div className={styles.productCard}>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
        priority={false}
        loading="lazy"
      />
      <h4>{product.title}</h4>
      <p>{product.category}</p>
      <span>${product.price}</span>
      {session?.data && <button>Add to bascet</button>}
    </div>
  );
}
