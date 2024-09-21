import { FC } from 'react';
import { TailSpin } from 'react-loader-spinner';

const LoaderTailSpin: FC = () => {
  return (
    <TailSpin
      visible={true}
      height="100"
      width="100"
      color="#2196F3"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoaderTailSpin;
