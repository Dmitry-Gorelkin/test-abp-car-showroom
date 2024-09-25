import { FC } from 'react';
import Modal from 'react-modal';

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
    borderRadius: '8px',
    border: 'none',
    padding: '0px',
    maxWidth: '90vw',
    zIndex: 11,
  },
};

const ModalAddReview: FC<ModalAddReviewComponents> = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
    >
      <p>Open modal</p>
    </Modal>
  );
};

export default ModalAddReview;
