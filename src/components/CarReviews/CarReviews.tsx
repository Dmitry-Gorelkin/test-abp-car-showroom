import { FC, useState } from 'react';
import { LocalReview, Reviews } from '../../types';
import { Button } from '../UI/Button/Button.styled';
import {
  CarReviewsContainer,
  CarReviewsTitle,
  CarReviewsList,
  CarReviewsItem,
  CarReviewsName,
} from './CarReviews.styled';
import ModalAddReview from '../ModalAddReview/ModalAddReview';

type CarReviewsProps = {
  reviews: Reviews;
  addReview: (rewiew: LocalReview) => void;
};

const CarReviews: FC<CarReviewsProps> = ({ reviews, addReview }) => {
  const [open, setOpen] = useState<boolean>(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <CarReviewsContainer>
        <CarReviewsTitle>Reviews</CarReviewsTitle>

        <CarReviewsList>
          {reviews.map(({ reviewerName, comment }, i) => {
            return (
              <CarReviewsItem key={i}>
                <p>
                  <CarReviewsName>Name:</CarReviewsName> {reviewerName}
                </p>
                <p>{comment}</p>
              </CarReviewsItem>
            );
          })}
        </CarReviewsList>

        <Button onClick={() => setOpen(true)}>add review</Button>
      </CarReviewsContainer>

      <ModalAddReview isOpen={open} closeModal={closeModal} addReview={addReview} />
    </>
  );
};

export default CarReviews;
