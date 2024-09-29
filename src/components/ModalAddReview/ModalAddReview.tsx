import { FC, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Button } from '../UI/Button/Button.styled';
import {
  ModalBtnContainer,
  ModalContainer,
  ModalInput,
  ModalTextarea,
} from './ModalAddReview.styled';
import { LocalReview } from '../../types';
import toast from 'react-hot-toast';

type ModalAddReviewProps = {
  isOpen: boolean;
  closeModal: () => void;
  addReview: (review: LocalReview) => void;
};

type CommentUser = { reviewerName: string; comment: string };

const initiationState: CommentUser = {
  reviewerName: '',
  comment: '',
};

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    zIndex: 10,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '16px',
    border: 'none',
    padding: '0px',
    maxWidth: '90vw',
    zIndex: 11,
  },
};

const ModalAddReview: FC<ModalAddReviewProps> = ({ isOpen, closeModal, addReview }) => {
  const [reviewData, setReviewData] = useState<CommentUser>(initiationState);

  useEffect(() => {
    if (isOpen) {
      const storedData = localStorage.getItem('reviewData');

      if (storedData) {
        setReviewData(JSON.parse(storedData));
      }
    }
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem('reviewData', JSON.stringify(reviewData));
  }, [reviewData]);

  useEffect(() => {
    return () => {
      localStorage.removeItem('reviewData');
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setReviewData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddReview = () => {
    if (reviewData.reviewerName.trim() === '' || reviewData.comment.trim() === '') {
      toast.error('The fields must be filled in. It is not allowed to send an empty value.');
      return;
    }

    addReview(reviewData);

    localStorage.removeItem('reviewData');

    setReviewData(initiationState);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
    >
      <ModalContainer>
        <ModalInput
          name="reviewerName"
          type="text"
          placeholder="Name"
          value={reviewData.reviewerName}
          onChange={handleChange}
        />
        <ModalTextarea
          name="comment"
          placeholder="Comment"
          value={reviewData.comment}
          onChange={handleChange}
        ></ModalTextarea>
        <ModalBtnContainer>
          <Button onClick={handleAddReview}>add</Button>
          <Button onClick={closeModal}>cancel</Button>
        </ModalBtnContainer>
      </ModalContainer>
    </Modal>
  );
};

export default ModalAddReview;
