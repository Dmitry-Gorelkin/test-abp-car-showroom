import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC } from 'react';
import { Button } from '../Button/Button.styled';
import { SliderLazyLoadContainerButton, SliderLazyLoadContainer } from './SliderLazyLoad.styled';

type Pictures = {
  pictures: string[] | undefined;
};

const SliderLazyLoad: FC<Pictures> = ({ pictures }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    swipe: true,
  };

  return pictures ? (
    <SliderLazyLoadContainer>
      <Slider
        ref={slider => {
          sliderRef = slider;
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
