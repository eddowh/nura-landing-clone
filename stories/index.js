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


const ReviewItem = ({ review }) => (
  <Div 
    d="flex"
    flexDir="column"
    justify="space-between"
    className="carousel-item-wrapper review-wrapper"
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
);

const CarouselSlideLeftButton = ({ decrementIndex }) => (
  <Col
    size={1} bg="white"
    className="carousel-slide-left-container"
  >
    <Div
      w="100%"
      className="carousel-slide-left-wrapper"
      onClick={decrementIndex}
    >
      <Button
        h="4rem" p="0px" w="100%" bg="transparent"
        className="carousel-slide-left-button"
      >
        <Icon name="LeftArrow" size="48px" color="gray800" />
      </Button>
    </Div>
  </Col>
);

const CarouselSlideRightButton = ({ incrementIndex }) => (
  <Col
    size={1} bg="white"
    className="carousel-slide-right-container"
  >
    <Div
      w="100%"
      className="carousel-slide-right-wrapper"
      onClick={incrementIndex}
    >
      <Button
        h="4rem" p="0px" w="100%" bg="transparent"
        className="carousel-slide-right-button"
      >
        <Icon name="RightArrow" size="48px" color="gray800" />
      </Button>
    </Div>
  </Col>
);


class CarouselItemList extends React.Component {
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
    const { itemIndex } = this.props;
    const { carouselWidth, containerHeight } = this.state;

    const carouselItems = this.props.children;

    return (
      <Div
        ref={this.containerListRef}
        d="flex"
        bg="white"
        className="carousel-item-containers"
        style={{ whiteSpace: 'nowrap' }}
        transform={{
          xs: `translateX(${-itemIndex * carouselWidth / 2}px)`,
          lg: `translateX(${-itemIndex * carouselWidth / 4}px)`,
        }}
        w={carouselWidth * carouselItems.length + 'px'}
        transition="all 0.5s ease-in-out"
      >
        {carouselItems.map((item, index) => (
          <Div
            key={index}
            d="inline-flex"
            w={{
              xs: carouselWidth / 2 + 'px',
              lg: carouselWidth / 4 + 'px',
            }}
            className="carousel-item-container"
            style={{
              whiteSpace: 'pre-line',
            }}
          >
            {item}
          </Div>
        ))}
      </Div>
    );
  }
}

const CarouselContent = ({ itemIndex, children }) => (
  <Col
    size={10}
    bg="white"
    className="carousel-content"
    overflow="hidden"
  >
    <CarouselItemList itemIndex={itemIndex} >
      {children}
    </CarouselItemList>
  </Col>
)

class Carousel extends React.Component {
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
    const { itemIndex } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Div
          w="100%" bg="white"
          className="carousel-container"
          p={{ y: "4rem" }}
          fontFamily="primary"
        >
          <Row
            className="carousel-wrapper"
            w="100%"
            m="none"
            align="center"
          >
            <CarouselSlideLeftButton decrementIndex={this.decrementIndex} />
            <CarouselContent itemIndex={itemIndex}>
              {this.props.children}
            </CarouselContent>
            <CarouselSlideRightButton incrementIndex={this.incrementIndex} />
          </Row>
        </Div>
      </ThemeProvider>
    );
  }
}

const ReviewsCarousel = () => (
  <Carousel>
    {
      reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))
    }
  </Carousel>
);

storiesOf('ReviewsCarousel', module)
  .add('example', () => (
    <ReviewsCarousel reviews={reviews} />
  ));