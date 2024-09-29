import { FC } from 'react';
import { Car } from '../../types';
import {
  CarDescriptionContainer,
  CarDescriptionSpan,
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
      <p>
        Price: <CarDescriptionSpan>{price}$</CarDescriptionSpan>
      </p>
      <p>
        Number of cars in stock:{' '}
        <CarDescriptionSpan>{stock === 0 ? availabilityStatus : stock}</CarDescriptionSpan>
      </p>
    </CarDescriptionContainer>
  );
};

export default CarDescription;
