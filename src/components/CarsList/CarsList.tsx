import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fetchCarList } from '../../api';
import { Car, FilterCars } from '../../types';
import NoCars from '../NoCars/NoCars';
import CarCard from '../CarCard/CarCard';
import { CarsListContainer } from './CarsList.styled';
import LoaderPuff from '../UI/LoaderPuff/LoaderPuff';
import { Section } from '../UI/Section/Section.styled';
import Filter from '../Filter/Filter';

const CarsList: FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [visibleCars, setVisibleCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const api = async () => {
      setLoading(true);
      try {
        const data = await fetchCarList();
        setCars(data.products);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    api();
  }, []);

  const carsMpdels = () => {
    const models = cars.map(e => e.brand);

    return [...new Set(models)];
  };

  const filterVisibleCars = (filterCar: FilterCars): void => {
    const filterCar({ filter: filterCar, cars });
    setVisibleCars(filterCar({ filter: filterCar, cars }));
  };

  console.log(cars);
  return (
    <Section>
      <Section>
        <Filter carModel={carsMpdels} filterCars={filterVisibleCars} />
      </Section>
      <CarsListContainer>
        {loading ? (
          <LoaderPuff />
        ) : cars.length > 0 ? (
          cars.map(({ id, images, brand, title, price }) => (
            <CarCard
              key={id}
              id={id}
              srcImages={images[0]}
              brand={brand}
              title={title}
              price={price}
            />
          ))
        ) : (
          <NoCars />
        )}
      </CarsListContainer>
    </Section>
  );
};

export default CarsList;
