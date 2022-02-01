import axios from 'axios';

const url ='http://localhost:5000/api/products';

export const fetchProducts = () => axios.get(url);
export const fetchProduct = (product) => axios.get(url,product);
export const createProduct = (newProduct) => axios.product(url, newProduct);

