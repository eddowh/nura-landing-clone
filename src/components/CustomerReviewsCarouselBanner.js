import React from 'react';

import {
  Div,
  Text,
} from 'atomize';

import Carousel from './Carousel';
import CustomerReviewItem from './CustomerReviewItem';

import customerReviews from '../data/customerReviews';


const CustomerReviewsCarousel = (props) => (
  <Carousel {...props}>
    {
      customerReviews.map((review, index) => (
        <CustomerReviewItem key={index} review={review} />
      ))
    }
  </Carousel>
);

const CustomerReviewsCarouselBanner = (props) => (
  <Div {...props}>
    <Div>
      <Text
        tag="h1" textSize="display2"
        bg="white" textAlign="center"
        textWeight="inherit"
      >
          User Reviews
      </Text>
    </Div>
    <CustomerReviewsCarousel 
      w="100%" bg="white"
      className="carousel-container"
      p={{ y: "0rem" }}
    />
  </Div>
);

export default CustomerReviewsCarouselBanner;