import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoaderTailSpin from '../UI/LoaderTailSpin/LoaderTailSpin';
import { fetchCarId } from '../../api';
import { Car, LocalReview, Reviews } from '../../types';
import toast from 'react-hot-toast';
import SliderLazyLoad from '../UI/SliderLazyLoad/SliderLazyLoad';
import { Section } from '../UI/Section/Section.styled';
import { CarInfoContainer, CarInfoTitle } from './CarInfo.styled';
import NotFound from '../UI/NotFound/NotFound';
import CarReviews from '../CarReviews/CarReviews';
import CarDescription from '../CarDescription/CarDescription';

type LocalReviews = {
  id: string;
  reviews: LocalReview[];
};

const CarInfo: FC = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car>({} as Car);
  const [reviewsUser, setReviewsUser] = useState<LocalReview[]>([]);
  const [reviewsApi, setReviewsApi] = useState<Reviews>([]);
  const [reviews, setReviews] = useState<Reviews>([]);
  const [loading, setLoading] = useState<boolean>(true);
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

        if (data.category !== 'vehicle') setError(true);

        setCar(data);
        setReviewsApi(data.reviews);
      } catch (err: unknown) {
        setError(true);
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
  }, [id]);

  useEffect(() => {
    const reviewsStored = localStorage.getItem('reviews');
    const reviewsArrStored: LocalReviews[] = reviewsStored ? JSON.parse(reviewsStored) : [];
    const reviewsId = reviewsArrStored.find((e: LocalReviews) => e.id === id);

    if (reviewsId) setReviewsUser(reviewsId.reviews);
  }, [id]);

  useEffect(() => {
    setReviews([...reviewsApi, ...reviewsUser]);
  }, [reviewsApi, reviewsUser]);

  const addReviewUserAdd = (rewiew: LocalReview): void => {
    setReviewsUser(prev => [...prev, rewiew]);

    const reviewsStored = localStorage.getItem('reviews');
    const reviewsArrStored: LocalReviews[] = reviewsStored ? JSON.parse(reviewsStored) : [];
    const reviewsId = reviewsArrStored.find((e: LocalReviews) => e.id === id);

    if (reviewsId) {
      const newReviewsId = { ...reviewsId, reviews: [...reviewsId.reviews, rewiew] };
      const newReviewsArrStored = reviewsArrStored.filter((e: LocalReviews) => e.id !== id);

      localStorage.setItem('reviews', JSON.stringify([...newReviewsArrStored, newReviewsId]));

      return;
    }

    const newReviewsId = { id, reviews: [rewiew] };

    localStorage.setItem('reviews', JSON.stringify([...reviewsArrStored, newReviewsId]));
  };

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      {loading ? (
        <CarInfoContainer>
          <LoaderTailSpin />
        </CarInfoContainer>
      ) : (
        <>
          <Section>
            <CarInfoTitle>
              {car.brand} {car.title}
            </CarInfoTitle>
          </Section>
          <Section>
            <SliderLazyLoad pictures={car.images} />
          </Section>
          <Section>
            <CarDescription
              description={car.description}
              price={car.price}
              availabilityStatus={car.availabilityStatus}
              stock={car.stock}
            />
          </Section>
          <Section>
            <CarReviews reviews={reviews} addReview={addReviewUserAdd} />
          </Section>
        </>
      )}
    </>
  );
};

export default CarInfo;
