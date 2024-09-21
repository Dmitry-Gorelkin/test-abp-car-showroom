import axios from 'axios';
import { Car } from './types';

axios.defaults.baseURL = 'https://dummyjson.com/';

type CarsListFetch = {
  limit: number;
  products: Car[];
  skip: number;
  total: number;
};

export const fetchCarList = async (): Promise<CarsListFetch> => {
  const response = await axios('products/category/vehicle');
  return response.data;
};
export const fetchCarId = async (id: number | string): Promise<Car> => {
  const response = await axios(`products/${id}`);
  return response.data;
};

export const fetchCategoryList = async (): Promise<string[]> => {
  const response = await axios('products/category-list');
  return response.data;
};
