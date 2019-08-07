import React from 'react';

import {
  Button,
  Col,
  Div,
  Icon,
  Image,
  Row,
  Tag,
  Text,
} from 'atomize';

const techSpecs = {
  Dimensions: "190 x 170 x 88 mm",
  Weight: "329g",
  Connectivity: "Bluetooth aptX HD, Universal Wired (Lightning, USB-C, micro-USB, analog)",
  Battery: "Lithium Ion Battery, Up to 20 hours",
  Noise_Isolation: "Active Noise Cancellation (ANC) + Dual passive isolation",
  Materials: "High grade stainless, aluminium cups, hypoallergenic silicon pads",
  Voice: "External microphones for calls",
}

const leftColumnStyle = {
  tag: "h2",
  textSize: "display1",
  textWeight: "inherit",
  m: {
    t: '-0.5rem',
  },
}

const rightColumnStyle = {
  tag: "body",
  textSize: "subtitle",
  textWeight: "inherit",
  w: "unset",
}

const SpecificationBanner = () => (
  <Div
    d="flex"
    w="100%"
    bg="gray700"
    p={{ y : '3rem' }}
    justify="center"
    fontFamily="primary"
    textColor="white"
    textWeight="300"
  >
    <Div
      d="flex" flexDir="column"
      align="flex-start"
      maxW="1200px"
      bg="footer"
      p={{ x: { xs: '1rem', sm: '2rem' } }}
    >
      <Tag
        rounded="circle" bg="brand100"
        textColor="white" textSize="body" textTransform="uppercase"
        p={{ x : '1rem', y: '0.25rem' }}
      >
        Specifications
      </Tag>
      <Text
        tag="h1" textSize="display3"
        p={{ t: '2rem' }}
        textWeight="inherit"
      >
        nuraphone
      </Text>
      <Div
        d="flex" flexDir="row"
        maxW={{ xs: '100%', sm: '75%', md: '55%' }}
        p={{ b: '1rem' }}
      >
        <Image src="https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8e59d004e678_Specs_2x_C.jpg" />
      </Div>
      <Row
        w="100%"
        p={{ y: '2rem' }}
        border={{ t : '1px solid' }}
        borderColor="white"
      >
        <Col size={5}>
          <Text {...leftColumnStyle}>
            Unboxed
          </Text>
        </Col>
        <Col size={7}>
          <Text {...rightColumnStyle}>
            1. Nuraphone
            <br />
            2. Travel case
            <br />
            3. USB-A charging cable
            <br />
            4. Multi-sized ear tips
            <br />
          </Text>
        </Col>
      </Row>
      <Row
        w="100%"
        p={{ y: '2rem' }}
        border={{ t : '1px solid' }}
        borderColor="white"
      >
        <Col size={5}>
          <Text {...leftColumnStyle}>
            Tech Specs
          </Text>
        </Col>
        <Col size={7} d="flex" flexDir="column">
          {
            Object.keys(techSpecs).map((name, index) => (
              <Row
                key={index}
                w="100%"
                p={{ b: '1rem' }}
              >
                <Col size={5}>
                  <Text {...rightColumnStyle}>
                    {name.replace('_', '')}
                  </Text>
                </Col>
                <Col size={7}>
                  <Text {...rightColumnStyle}>
                    {techSpecs[name]}
                  </Text>
                </Col>
              </Row>
            ))
          }
        </Col>
      </Row>
      <Row
        w="100%"
        p={{ y: '2rem' }}
        border={{ t : '1px solid' }}
        borderColor="white"
      >
        <Col size={5}>
          <Text {...leftColumnStyle}>
            Need more info?
          </Text>
        </Col>
        <Col size={7} d="flex" flexDir="row" align="center">
          <Text {...rightColumnStyle}>
            Visit our support section and we'll be happy to assist.
          </Text>
          <Button bg="transparent">
            <Icon name="RightArrowSolid" size="36px" />
          </Button>
        </Col>
      </Row>
    </Div>
  </Div>
);

export default SpecificationBanner;