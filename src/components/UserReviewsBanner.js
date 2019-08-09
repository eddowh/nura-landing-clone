import React from 'react';
import { Div } from 'atomize';

import CustomerReviewsCarouselBanner from './CustomerReviewsCarouselBanner';


const containerStyle = {
  overflow: 'hidden',
  className: 'hero-container',
  id: 'user-reviews-hero-container'
}

const wrapperStyle = {
  d: 'flex',
  flexDir: { xs: 'column', md: 'row' },
  p: { y: '4rem' },
  align: 'center',
  justify: 'center',
  className: 'hero-wrapper',
  id: 'user-reviews-hero-wrapper',                
}

const bannerStyle = {
  w: '100%',
  maxW: '100%',
  textWeight: '400',
}

const UserReviewsBanner = () => (
  <Div {...containerStyle}>
    <Div {...wrapperStyle}>
      <CustomerReviewsCarouselBanner {...bannerStyle} />
    </Div>
  </Div>
);

export default UserReviewsBanner;