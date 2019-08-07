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
import SpecificationBanner from './components/SpecificationBanner';

/**
 * [START] Carousel stories
 */
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

// [END] Carousel Stories


/**
 * [START] Banner Stories
 */
storiesOf('Banners', module)
  .add('specifications', () => (
    <ThemeProvider theme={theme}>
      <SpecificationBanner />
    </ThemeProvider>
  ));

// [END] Banner Stories