import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoaderTailSpin from '../UI/LoaderTailSpin/LoaderTailSpin';
import { fetchCarId } from '../../api';
import { Car, Reviews } from '../../types';
import toast from 'react-hot-toast';
import SliderLazyLoad from '../UI/SliderLazyLoad/SliderLazyLoad';
import { Section } from '../UI/Section/Section.styled';
import { CarInfoContainer, CarInfoTitle } from './CarInfo.styled';
import NotFound from '../UI/NotFound/NotFound';
import { Button } from '../UI/Button/Button.styled';

type LocalReview = {
  reviewerName: string;
  date: string;
  comment: string;
};

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
  }, []);

  useEffect(() => {
    const reviewsStored = localStorage.getItem('reviews');
    const reviewsArrStored: LocalReviews[] | null = reviewsStored
      ? JSON.parse(reviewsStored)
      : null;

    if (reviewsArrStored) {
      const reviewsArr = reviewsArrStored.find((e: LocalReviews) => e.id === id);
      console.log(reviewsArr);

      if (reviewsArr) setReviewsUser(reviewsArr.reviews);
    }
  }, []);

  useEffect(() => {
    setReviews([...reviewsApi, ...reviewsUser]);
  }, [reviewsApi, reviewsUser]);

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
            {/* CarCaption */}
            <p>{car.description}</p>
            <p>Price: {car.price}$</p>
            <p>Number of cars in stock: {car?.stock === 0 ? car.availabilityStatus : car.stock}</p>
          </Section>
          <Section>
            {/* CarReview */}
            <h3>Reviews:</h3>
            <ul>
              {reviews.map(({ reviewerName, date, comment }, i) => {
                return (
                  <li key={i}>
                    <p>Name: {reviewerName}</p>
                    <p>Date: {date}</p>
                    <p>Comment: {comment}</p>
                  </li>
                );
              })}
            </ul>

            <Button>add review</Button>
          </Section>
        </>
      )}
    </>
  );
};

export default CarInfo;
