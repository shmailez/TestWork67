import { Product } from '@/types/product';
import { ProductsResponse } from '@/types/productResponse';
import axios from 'axios';



const API = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts  = async () : Promise<Product[]> => {
  const response = await API.get<ProductsResponse>('/products?limit=12');
  return response.data.products;
};