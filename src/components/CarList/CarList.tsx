import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fetchCarList } from '../../api';
import { Car } from '../../types';
import CarItem from '../CarItem/CarItem';
import LoaderTailSpin from '../UI/LoaderTailSpin/LoaderTailSpin';

const CarList: FC = () => {
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
      {loading ? (
        <LoaderTailSpin />
      ) : (
        <ul>
          {cars.map(({ id }) => (
            <CarItem key={id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default CarList;
