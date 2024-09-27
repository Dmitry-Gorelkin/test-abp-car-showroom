import { Car, FilterCars } from '../types';

type Filter = {
  filter: FilterCars;
  cars: Car[];
};

const filterCar = (filter: Filter): Car[] => {
  const { inStock, priceFrom, priceTo, sort, models } = filter.filter;
  const cars = filter.cars;

  let visibleCars = cars;

  if (inStock) {
    visibleCars = visibleCars.filter(e => e.availabilityStatus === 'In Stock');
  }

  return visibleCars;
};

export default filterCar;
