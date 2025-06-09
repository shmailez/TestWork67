import { fetchProducts } from "@/services/getProducts";
import { StoreState } from "@/types/storeState";
import { createWithEqualityFn } from 'zustand/traditional'

export const UseProdust = createWithEqualityFn<StoreState>((set) => ({
    products: [],
    loading: false,
    error: null,

    getProducts: async () => {
        set({ loading: true, error: null });

        try {
            const products = await fetchProducts();
            set({ products, loading: false });
        } catch (err) {
            set({
                loading: false,
                error: (err as Error).message || 'Произошла ошибка при загрузке товаров.',
            });
        }
    }
}))