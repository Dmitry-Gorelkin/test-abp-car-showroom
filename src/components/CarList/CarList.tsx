import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fetchCarList } from '../../api';
import { Car } from '../../types';
import LoaderTailSpin from '../UI/LoaderTailSpin/LoaderTailSpin';
import CarCardItem from '../CarItem/CarCardItem';

enum STATUS_PAGE {
  ideal = 'IDEAL',
  load = 'LOAD',
  error = 'ERROR',
  noimage = 'NOIMAGE',
}

const CarList: FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState(STATUS_PAGE.ideal);

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
      {status === STATUS_PAGE.load && <LoaderTailSpin />}
      <ul>
        {cars.length > 0 &&
          cars.map(({ id, images, brand, title, price }) => (
            <CarCardItem key={id} srcImages={images[0]} brand={brand} title={title} price={price} />
          ))}
      </ul>
      {/* {status === STATUS_PAGE.noimage && <NoImage />} */}
      {/* {status === STATUS_PAGE.error && <ErrorMessage />} */}
    </>
  );
};

export default CarList;
