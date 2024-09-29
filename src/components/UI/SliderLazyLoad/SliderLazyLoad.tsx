import Slider from 'react-slick';
import { FC, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '../Button/Button.styled';
import { SliderLazyLoadContainerButton, SliderLazyLoadContainer } from './SliderLazyLoad.styled';

type SliderLazyLoadProps = {
  pictures: string[] | undefined;
};

const settings = {
  dots: true,
  lazyLoad: 'progressive' as 'ondemand' | 'progressive',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  swipe: true,
};

const SliderLazyLoad: FC<SliderLazyLoadProps> = ({ pictures }) => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return pictures ? (
    <SliderLazyLoadContainer>
      <Slider
        ref={slider => {
          sliderRef.current = slider;
        }}
        {...settings}
      >
        {pictures.map(e => (
          <div key={e}>
            <img src={e} alt={e} />
          </div>
        ))}
      </Slider>
      <SliderLazyLoadContainerButton>
        <Button onClick={previous}>Previous</Button>
        <Button onClick={next}>Next</Button>
      </SliderLazyLoadContainerButton>
    </SliderLazyLoadContainer>
  ) : (
    <></>
  );
};

export default SliderLazyLoad;
