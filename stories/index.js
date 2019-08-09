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
const CustomerReviewsCarousel = (props) => (
  <Carousel {...props}>
    {
      customerReviews.map((review, index) => (
        <CustomerReviewItem key={index} review={review} />
      ))
    }
  </Carousel>
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
    <ThemeProvider theme={theme}>
      <Div bg="white" p={{ y: '2rem' }} fontFamily="primary" textWeight="400">
        <Div bg="brand500">
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
    </ThemeProvider>
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