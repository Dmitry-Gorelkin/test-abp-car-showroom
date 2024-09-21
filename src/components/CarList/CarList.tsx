import { FC, useEffect } from 'react';
import toast from 'react-hot-toast';
import { fetchCarList } from '../../api';

const CarList: FC = () => {
  useEffect(() => {
    const api = async () => {
      try {
        const data = await fetchCarList();

        console.dir(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error('An unknown error occurred');
        }
      }
    };

    api();
  }, []);

  return (
    <>
      <p>list car</p>
    </>
  );
};

export default CarList;
