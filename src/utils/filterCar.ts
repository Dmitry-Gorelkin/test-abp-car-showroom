import { Car, FilterCars } from '../types';

type Filter = {
  filter: FilterCars;
  cars: Car[];
};

const filterCarVisible = (filter: Filter): Car[] => {
  const { inStock, priceFrom, priceTo, sort, models } = filter.filter;
  const cars = filter.cars;

  let visibleCars = [...cars];

  if (inStock) {
    visibleCars = visibleCars.filter(e => e.availabilityStatus === 'In Stock');
  }

  if (priceFrom !== '') {
    visibleCars = visibleCars.filter(e => e.price >= parseInt(priceFrom));
  }

  if (priceTo !== '') {
    visibleCars = visibleCars.filter(e => e.price <= parseInt(priceTo));
  }

  if (sort === 'Ascending') {
    visibleCars = [...visibleCars.sort((a, b) => a.price - b.price)];
  }

  if (sort === 'Descending') {
    visibleCars = [...visibleCars.sort((a, b) => b.price - a.price)];
  }

  if (models !== 'All Models') {
    visibleCars = visibleCars.filter(e => e.brand === models);
  }

  return visibleCars;
};

export default filterCarVisible;
