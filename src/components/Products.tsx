'use client'
import { UseProdust } from "@/store/store"
import { useEffect } from "react"
import { shallow } from "zustand/shallow"
import ProductCard from "./ProductCard"
import styles from '../app/page.module.scss'
import { Product } from "../types/product"
import { StoreState } from "../types/storeState"

export default function Products() {

    const [products, loading, getProducts, error] = UseProdust((state : StoreState )=> 
            [state.products, state.loading, state.getProducts, state.error],
            shallow
    )
   
    useEffect(() => {
            getProducts()
        }, [getProducts])

    return <>
        <div className={styles.products}>
            {loading && <h3>Loading...</h3>}
            {error && (
                <p className={styles.error}>
                    Something went wrong: {error}
                </p>
                )}
            {!loading && !error && (<>{products.map((product : Product) => (
                <ProductCard key={product.id} product={product} />
            ))}</>) }
            </div>
    </>
}