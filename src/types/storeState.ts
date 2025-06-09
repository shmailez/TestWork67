import { Product } from "./product";

export interface StoreState {
    products: Product[];
    loading: boolean;
    getProducts: () => void
}
