import { FC, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Button } from '../UI/Button/Button.styled';
import {
  ModalBtnContainer,
  ModalContainer,
  ModalInput,
  ModalTextarea,
} from './ModalAddReview.styled';

type ModalAddReviewComponents = {
  isOpen: boolean;
  closeModal: () => void;
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

const ModalAddReview: FC<ModalAddReviewComponents> = ({ isOpen, closeModal }) => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const handleAddReview = () => {
    console.log('Name:', name);
    console.log('Comment:', comment);

    localStorage.removeItem('reviewName');
    localStorage.removeItem('reviewComment');

    setName('');
    setComment('');
    closeModal();
  };

  useEffect(() => {
    if (isOpen) {
      const storedName = localStorage.getItem('reviewName');
      const storedComment = localStorage.getItem('reviewComment');

      if (storedName) setName(storedName);
      if (storedComment) setComment(storedComment);
    }
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem('reviewName', name);
    localStorage.setItem('reviewComment', comment);
  }, [name, comment]);

  useEffect(() => {
    return () => {
      localStorage.removeItem('reviewName');
      localStorage.removeItem('reviewComment');
    };
  }, []);

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
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <ModalTextarea
          name="comment"
          id=""
          placeholder="Comment"
          value={comment}
          onChange={handleCommentChange}
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
