import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoaderTailSpin from '../UI/LoaderTailSpin/LoaderTailSpin';
import { fetchCarId } from '../../api';
import { Car } from '../../types';
import toast from 'react-hot-toast';

const CarPage: FC = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const api = async () => {
      setLoading(true);
      try {
        if (!id) {
          toast.error('Invalid parameter: ID is required.');
          return;
        }

        const data = await fetchCarId(id);
        setCar(data);
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

  console.log({ id, car });

  return <>{loading ? <LoaderTailSpin /> : <h2>tyt mojet bit vasha reclama</h2>}</>;
};

export default CarPage;
