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
          error.response.data?.message || 'Ошибка при загрузке товаров с сервера.'
        );
      } else if (error.request) {
        throw new Error('Сервер не отвечает. Проверьте интернет-соединение.');
      } else {
        throw new Error(`Ошибка запроса: ${error.message}`);
      }
    } else {
      throw new Error('Произошла неизвестная ошибка при загрузке товаров.');
    }
  }
};