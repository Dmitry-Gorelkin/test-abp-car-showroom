import { FC } from 'react';
import {
  CarCardContainer,
  CarCardImg,
  CarCardPrice,
  CarCardText,
  CarCardTitle,
} from './CarCard.styled';

type CarItem = {
  srcImages: string;
  title: string;
  brand: string;
  price: number;
};

const CarCard: FC<CarItem> = ({ srcImages, title, brand, price }) => {
  return (
    <CarCardContainer>
      <CarCardImg src={srcImages} alt={title} loading="lazy" />
      <CarCardTitle>
        {brand} {title}
      </CarCardTitle>
      <CarCardText>
        Price: <CarCardPrice>{price}$</CarCardPrice>
      </CarCardText>
    </CarCardContainer>
  );
};

export default CarCard;
