import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fetchCarList } from '../../api';
import { Car } from '../../types';
import LoaderTailSpin from '../UI/LoaderTailSpin/LoaderTailSpin';
import NoCars from '../NoCars/NoCars';
import CarCard from '../CarCard/CarCard';
import { CarsListContainer } from './CarsList.styled';

const CarsList: FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const api = async () => {
      setLoading(true);
      try {
        const data = await fetchCarList();
        console.log(data.products);
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

  return (
    <>
      <CarsListContainer>
        {loading ? (
          <LoaderTailSpin />
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
    </>
  );
};

export default CarsList;
