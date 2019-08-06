import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider } from 'atomize';
import {
  Button,
  Col,
  Div,
  Icon,
  Row,
  Text,
} from 'atomize';

import theme from '../src/theme';
import customerReviews from '../src/data/customerReviews';
import expertReviews from '../src/data/expertReviews';

import Carousel from './components/Carousel';
import CustomerReviewItem from './components/CustomerReviewItem';
import ExpertReviewItem from './components/ExpertReviewItem';

const CustomerReviewsCarousel = () => (
  <ThemeProvider theme={theme}>
    <Carousel>
      {
        customerReviews.map((review, index) => (
          <CustomerReviewItem key={index} review={review} />
        ))
      }
    </Carousel>
  </ThemeProvider>
);

const ExpertReviewsCarousel = () => (
  <ThemeProvider theme={theme}>
    <Carousel>
      {
        expertReviews.map((review, index) => (
          <ExpertReviewItem key={index} review={review} />
        ))
      }
    </Carousel>
  </ThemeProvider>
);

storiesOf('Carousel', module)
  .add('customer reviews', () => (
    <CustomerReviewsCarousel />
  ))
  .add('expert reviews', () => (
    <ExpertReviewsCarousel />
  ));