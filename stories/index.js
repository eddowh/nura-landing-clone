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
import reviews from '../src/data/reviews';

class ReviewContainerList extends React.Component {
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
              className="review-container"
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

class ReviewsCarousel extends React.Component {
  state = {
    itemIndex: 0,
  }

  decrementIndex = () => {
    this.setState(prevState => ({
      itemIndex: prevState.itemIndex - 1,
    }));
  }

  incrementIndex = () => {
    this.setState(prevState => ({
      itemIndex: prevState.itemIndex + 1,
    }));
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <Div
          w="100%" bg="white"
          className="text-carousel-container"
          p={{ y: "4rem" }}
          fontFamily="primary"
        >
          <Row
            className="text-carousel-wrapper"
            w="100%"
            m="none"
            align="center"
          >
            <Col size={1} bg="white">
              <Div w="100%" onClick={this.decrementIndex}>
                <Button h="4rem" p="0px" w="100%" bg="transparent">
                  <Icon name="LeftArrow" size="48px" color="gray800" />
                </Button>
              </Div>
            </Col>
            <Col
              size={10}
              bg="white"
              className="text-carousel-content"
              overflow="hidden"
            >
              <ReviewContainerList itemIndex={this.state.itemIndex} reviews={this.props.reviews} />
            </Col>
            <Col size={1} bg="white">
              <Div w="100%" onClick={this.incrementIndex}>
                <Button h="4rem" p="0px" w="100%" bg="transparent">
                  <Icon name="RightArrow" size="48px" color="gray800" />
                </Button>
              </Div>
            </Col>
          </Row>
        </Div>
      </ThemeProvider>
    );
  }
}

storiesOf('ReviewsCarousel', module)
  .add('example', () => (
    <ReviewsCarousel reviews={reviews} />
  ));