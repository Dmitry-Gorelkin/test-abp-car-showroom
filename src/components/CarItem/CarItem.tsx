import { FC } from 'react';
import {
  CarItemCaption,
  CarItemContainer,
  CarItemImg,
  CarItemLink,
  CarItemPrice,
  CarItemText,
  CarItemTitle,
} from './CarItem.styled';

type CarItemProps = {
  id: string | number;
  srcImages: string;
  title: string;
  brand: string;
  price: number;
};

const CarItem: FC<CarItemProps> = ({ id, srcImages, title, brand, price }) => {
  return (
    <CarItemContainer>
      <CarItemLink to={`vehicles/${id}`}>
        <CarItemImg src={srcImages} alt={title} loading="lazy" />
        <CarItemCaption>
          <CarItemTitle>
            {brand} {title}
          </CarItemTitle>
          <CarItemText>
            Price: <CarItemPrice>{price}$</CarItemPrice>
          </CarItemText>
        </CarItemCaption>
      </CarItemLink>
    </CarItemContainer>
  );
};

export default CarItem;
