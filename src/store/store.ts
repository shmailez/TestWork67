import { fetchProducts } from "@/services/getProducts";
import { StoreState } from "@/types/storeState";
import { createWithEqualityFn } from 'zustand/traditional'

export const UseProdust = createWithEqualityFn<StoreState>((set) => ({
    products: [],
    loading: false,
    getProducts: async () => {
        set({loading: true})
        const products = await fetchProducts()
        set({products, loading: false})
    }
}))