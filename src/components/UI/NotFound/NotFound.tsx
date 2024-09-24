import { FC } from 'react';
import { NotFoundContainer, NotFoundTitle } from './NotFound.styled';

const NotFound: FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>Page Not Found</NotFoundTitle>
    </NotFoundContainer>
  );
};

export default NotFound;
