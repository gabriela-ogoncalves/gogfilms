/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
      color:${(props) => props.arrowColor};
    }
  }
  .slick-list {
    overflow: visible !important;
    margin-left: 15px;
  }
  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 16px;
  }
  .slick-dots li button:before{
    color: white;
  }
  .slick-dots li.slick-active button:before {
    color: ${(props) => props.arrowColor};;
  }
  .slick-dots {
    margin-bottom: -30px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  margin-left: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children, arrowColor }) => (
  <Container arrowColor={arrowColor}>
    <SlickSlider {...{
      dots: true,
      infinite: true,
      speed: 500,
      // slidesToShow: 4,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       dots: true,
      //     }
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      // ]
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
