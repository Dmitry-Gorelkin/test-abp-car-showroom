import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoaderTailSpin from '../UI/LoaderTailSpin/LoaderTailSpin';
import { fetchCarId } from '../../api';
import { Car } from '../../types';
import toast from 'react-hot-toast';
import SliderLazyLoad from '../UI/SliderLazyLoad/SliderLazyLoad';
import { Section } from '../UI/Section/Section.styled';
import { CarInfoContainer, CarInfoTitle } from './CarInfo.styled';
import NotFound from '../../pages/NotFoundPage';

const CarInfo: FC = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const api = async () => {
      setLoading(true);
      try {
        if (!id) {
          toast.error('Invalid parameter: ID is required.');
          return;
        }

        const data = await fetchCarId(id);

        console.log(data);
        if (data.category !== 'vehicle') setError(true);

        console.log(data);
        setCar(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          toast.error(err.message);
        } else {
          toast.error('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    api();
  }, []);

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      {loading ? (
        <LoaderTailSpin />
      ) : (
        <>
          <Section>
            <CarInfoTitle>
              {car?.brand} {car?.title}
            </CarInfoTitle>
          </Section>
          <Section>
            <SliderLazyLoad pictures={car?.images} />
          </Section>
          <Section>
            {/* CarCaption */}
            <p>{car?.description}</p>
            <p>Price: {car?.price}$</p>
            <p>
              Number of cars in stock: {car?.stock === 0 ? car?.availabilityStatus : car?.stock}
            </p>
          </Section>
          <Section>
            {/* CarReview */}
            <h3>Reviews:</h3>
            <ul>
              {car?.reviews.map(({ reviewerName, date, comment }, i) => {
                return (
                  <li key={i}>
                    <p>Name: {reviewerName}</p>
                    <p>Date: {date}</p>
                    <p>Comment: {comment}</p>
                  </li>
                );
              })}
            </ul>
          </Section>
        </>
      )}
    </>
  );
};

export default CarInfo;
