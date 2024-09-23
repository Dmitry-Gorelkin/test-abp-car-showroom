import { FC } from 'react';

type CarItem = {
  srcImages: string;
  title: string;
  brand: string;
  price: number;
};

const CarCardItem: FC<CarItem> = ({ srcImages, title, brand, price }) => {
  return (
    <li>
      <img src={srcImages} alt={title} />
      <p>
        {brand} {title}
      </p>
      <p>Price: {price}$</p>
    </li>
  );
};

export default CarCardItem;
