import React from 'react';

import {
  Button,
  Col,
  Div,
  Icon,
  Row,
  Text,
} from 'atomize';

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
    });
  }

  render () {    
    const { itemIndex } = this.props;
    const { carouselWidth } = this.state;

    const carouselItems = this.props.children;

    return (
      <Div
        ref={this.containerListRef}
        d="flex"
        bg="white"
        className="carousel-item-containers"
        style={{ whiteSpace: 'nowrap' }}
        transform={{
          xs: `translateX(${-itemIndex * carouselWidth / 1}px)`,
          md: `translateX(${-itemIndex * carouselWidth / 2}px)`,
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
              xs: carouselWidth / 1 + 'px',
              md: carouselWidth / 2 + 'px',
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
    p="0px"
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
      <Div {...this.props}>
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
    );
  }
}

export default Carousel;