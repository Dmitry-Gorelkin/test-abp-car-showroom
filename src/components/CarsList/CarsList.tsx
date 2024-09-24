import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fetchCarList } from '../../api';
import { Car } from '../../types';
import NoCars from '../NoCars/NoCars';
import CarCard from '../CarCard/CarCard';
import { CarsListContainer } from './CarsList.styled';
import { Section } from '../UI/Section/Section.styled';
import LoaderPuff from '../UI/LoaderPuff/LoaderPuff';

const CarsList: FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
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

    setTimeout(() => {
      api();
    }, 3000);

    // api();
  }, []);

  return (
    <Section>
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
