import { FC } from 'react';
import {
  CarCardCaption,
  CarCardContainer,
  CarCardImg,
  CarCardLink,
  CarCardPrice,
  CarCardText,
  CarCardTitle,
} from './CarCard.styled';

type CarItem = {
  id: string | number;
  srcImages: string;
  title: string;
  brand: string;
  price: number;
};

const CarCard: FC<CarItem> = ({ id, srcImages, title, brand, price }) => {
  return (
    <CarCardContainer>
      <CarCardLink to={`vehicles/${id}`}>
        <CarCardImg src={srcImages} alt={title} loading="lazy" />
        <CarCardCaption>
          <CarCardTitle>
            {brand} {title}
          </CarCardTitle>
          <CarCardText>
            Price: <CarCardPrice>{price}$</CarCardPrice>
          </CarCardText>
        </CarCardCaption>
      </CarCardLink>
    </CarCardContainer>
  );
};

export default CarCard;
