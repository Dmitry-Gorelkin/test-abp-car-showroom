import { FC } from 'react';
import { Car } from '../../types';
import {
  CarDescriptionContainer,
  CarDescriptionSpan,
  CarDescriptionText,
  CarDescriptionTitle,
} from './CarDescription.styled';

type CarDescriptionProps = Pick<Car, 'description' | 'price' | 'stock' | 'availabilityStatus'>;

const CarDescription: FC<CarDescriptionProps> = ({
  description,
  price,
  stock,
  availabilityStatus,
}) => {
  return (
    <CarDescriptionContainer>
      <CarDescriptionTitle>Description</CarDescriptionTitle>
      <p>{description}</p>
      <CarDescriptionText>
        Price: <CarDescriptionSpan>{price}$</CarDescriptionSpan>
      </CarDescriptionText>
      <CarDescriptionText>
        Number of cars in stock:{' '}
        <CarDescriptionSpan>{stock === 0 ? availabilityStatus : stock}</CarDescriptionSpan>
      </CarDescriptionText>
    </CarDescriptionContainer>
  );
};

export default CarDescription;
