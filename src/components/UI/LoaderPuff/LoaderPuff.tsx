import { FC } from 'react';
import { Puff } from 'react-loader-spinner';

const LoaderPuff: FC = () => {
  return (
    <Puff
      visible={true}
      height="100"
      width="100"
      color="#2196F3"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoaderPuff;
