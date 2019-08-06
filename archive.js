import React from 'react';

import {
  Button,
  Div,
  Icon,
  Text,
} from 'atomize';

import reviews from '../src/data/reviews';

export class ReviewContainerList extends React.Component {
  constructor(props) {
    super(props);
    this.containerListRef = React.createRef();
    this.state = {
      containerWidth: null,
      containerHeight: null,
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({
      carouselWidth: this.containerListRef.current.parentNode.clientWidth,
      containerHeight: this.containerListRef.current.clientHeight,
    });
  }

  render () {    
    const { itemIndex, reviews } = this.props;
    const { carouselWidth, containerHeight } = this.state;

    const slicedReviews = reviews.slice(0, reviews.length);

    return (
      <Div
        ref={this.containerListRef}
        d="flex"
        bg="white"
        id="review-containers"
        style={{ whiteSpace: 'nowrap' }}
        transform={{
          xs: `translateX(${-itemIndex * carouselWidth / 2}px)`,
          lg: `translateX(${-itemIndex * carouselWidth / 4}px)`,
        }}
        w={carouselWidth * slicedReviews.length + 'px'}
        transition="all 0.5s ease-in-out"
      >
        {
          slicedReviews.map((review, index) => (
            <Div
              key={index}
              d="inline-flex"
              w={{
                xs: carouselWidth / 2 + 'px',
                lg: carouselWidth / 4 + 'px',
              }}
              className="container"
              style={{
                whiteSpace: 'pre-line',
              }}
            >
              <Div 
                d="flex"
                flexDir="column"
                justify="space-between"
                className="review-wrapper"
                p="1.5rem"
              >
                <Div
                  d="flex" flexDir="column"
                  w="100%" align="center"
                  p={{ b: '1.5rem' }}
                  className="review-text-content"
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
                  <Div className="review-text-container">
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
                  className="review-reviewer-name"
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
            </Div>
          ))
        }
      </Div>
    );
  }
}