import { Product } from '@/types/product';
import { ProductsResponse } from '@/types/productResponse';
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await API.get<ProductsResponse>('/products?limit=12');
    return response.data.products;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          error.response.data?.message || 'Error loading products from the server.'
        );
      } else if (error.request) {
        throw new Error('The server is not responding. Check your internet connection.');
      } else {
        throw new Error(`Request error: ${error.message}`);
      }
    } else {
      throw new Error('An unknown error occurred while loading products.');
    }
  }
};