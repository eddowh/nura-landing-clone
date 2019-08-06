import React from 'react';

import {
  Div,
  Icon,
  Image,
  Text,
} from 'atomize';


const ExpertReviewItem = ({ review }) => (
  <Div 
    d="flex"
    w="100%"
    flexDir="column"
    justify="space-between"
    className="carousel-item-wrapper expert-review-wrapper"
    p="1.5rem"
  >
    <Div
      d="flex" flexDir="column"
      w="100%" align="center"
      className="expert-review-text-content"
      bg="white"
      p="0px"
    >
      <Div d="flex" className="expert-review-reviewer-logo">
        <Image src={review.reviewerLogo} />
      </Div>
      <Div p={{ t: '2rem' }} className="expert-review-text-container">
        <Text
          tag="p" textSize="subheader"
          textAlign="center"
          style={{ lineHeight: '1.5rem' }}
          w="100%"
        >
          "{review.text}"
        </Text>
      </Div>
    </Div>
  </Div>
);

export default ExpertReviewItem;