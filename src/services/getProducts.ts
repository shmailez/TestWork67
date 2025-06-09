// export const getAllProducts = async () => {
//     const responce = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     if(!responce.ok) {
//         throw new Error('EROORO')
//     }

//     return await responce.json()
// }

import axios from 'axios';

const API = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
  const response = await API.get('/products?limit=12');
  return response.data.products;
};