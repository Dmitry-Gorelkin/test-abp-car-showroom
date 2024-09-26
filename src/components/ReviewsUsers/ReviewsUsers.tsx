import { FC, useState } from 'react';
import { LocalReview, Reviews } from '../../types';
import { Button } from '../UI/Button/Button.styled';
import {
  ReviewsUsersContainer,
  ReviewsUsersTitle,
  ReviewsUsersList,
  ReviewsUsersItem,
  ReviewsUsersName,
} from './ReviewsUsers.styled';
import ModalAddReview from '../ModalAddReview/ModalAddReview';

type ReviewsUsersComponents = {
  reviews: Reviews;
  addReview: (rewiew: LocalReview) => void;
};

const ReviewsUsers: FC<ReviewsUsersComponents> = ({ reviews, addReview }) => {
  const [open, setOpen] = useState<boolean>(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <ReviewsUsersContainer>
        <ReviewsUsersTitle>Reviews:</ReviewsUsersTitle>
        <ReviewsUsersList>
          {reviews.map(({ reviewerName, comment }, i) => {
            return (
              <ReviewsUsersItem key={i}>
                <p>
                  <ReviewsUsersName>Name:</ReviewsUsersName> {reviewerName}
                </p>
                <p>{comment}</p>
              </ReviewsUsersItem>
            );
          })}
        </ReviewsUsersList>

        <Button onClick={() => setOpen(true)}>add review</Button>
      </ReviewsUsersContainer>
      <ModalAddReview isOpen={open} closeModal={closeModal} addReview={addReview} />
    </>
  );
};

export default ReviewsUsers;
