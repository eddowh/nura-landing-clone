import React from 'react';

import {
  Div,
  Icon,
  Text,
} from 'atomize';


const CustomerReviewItem = ({ review }) => (
  <Div 
    d="flex"
    flexDir="column"
    justify="space-between"
    className="carousel-item-wrapper customer-review-wrapper"
    p={{ t: '3.5rem', x: '1.5rem' }}
  >
    <Div
      d="flex" flexDir="column"
      w="100%" align="center"
      p={{ b: '1.5rem' }}
      className="customer-review-text-content"
    >
      <Div
        d="flex"
        flexDir="row"
        justify="center"
      >
        <Icon name="StarSolid" color="warning500" />
        <Icon name="StarSolid" color="warning500" />
        <Icon name="StarSolid" color="warning500" />
        <Icon name="StarSolid" color="warning500" />
        <Icon name="StarSolid" color="warning500" />
      </Div>
      <Text
        tag="h3" textSize="title"
        p={{ t: '1rem' , b: '0.5rem' }}
      >
        {review.title}
      </Text>
      <Div className="customer-review-text-container">
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
    <Div
      d="flex"
      flexDir="row"
      align="center"
      justify="center"
      bg="white"
      className="customer-review-reviewer-name"
      textAlign="center"
      border={{ t: '1px solid '}}
      borderColor="gray400"
      p={{ t: '0.5rem' }}
    >
      <Text tag="p" textSize="subheader">
        {review.reviewer}
      </Text>
      <Text tag="p" textSize="body" p={{ l: '0.5rem' }}>
        Verified Buyer
      </Text>
    </Div>
  </Div>
);

export default CustomerReviewItem;