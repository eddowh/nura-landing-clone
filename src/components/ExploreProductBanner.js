import React from 'react';

import {
  Button,
  Div,
  Text,
} from 'atomize';

import ResponsiveContext from '../contexts/ResponsiveContext';

const ExploreProductBanner = () => {
  return (
    <Div
      d="flex" justify="center"
      bg="brand100"
      bgImg="https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5cda95e66d9f353ba4971415_Loop_presale_homepageexperience_1.3a.jpg"
      bgPos="center"
      bgSize="cover"
      className="hero-container" 
    >
      <Div
        d="flex"
        flexDir={{ xs: "column", md: "row" }}
        justify="center"
        align="center"
        p={{ y: "6rem" }}
        maxW="1200px"
        textColor="white"
      >
        <Div
          d="flex"
          flexDir="column" 
          align="center"
          w="50vw"
          p={{ y: '2rem', x: { md: '2rem'} }}
        >
          <Text
            tag="h1"
            style={{ lineHeight: "80px" }}
            textSize={{ xs: "display2", sm: "display3", md: "hero", lg: "heroLg" }}
          >
            <b>nura</b>phone — Music in Full Colour.
          </Text>
          <Text
            tag="p"
            textAlign="left"
            p={{ y: { md: '1.5rem' }}}
            textSize={{ xs: "subheader", md: "subheader", lg: "heading" }}
          >
            The nuraphone is the world's only headphone
            that automatically learns and adapts to your unique hearing.
          </Text>
          <Div d="flex" m={{ t: "1rem" }} justify="flex-start" w='100%'>
            <Button
              w={{ xs: '85%', md: '70%' }} textSize="subheader"
              bg="transparent" border="1px solid" borderColor="white"
            >
              Discover more
            </Button>
          </Div>
        </Div>
        <Div d="flex" justify="center" w="50vw" p={{ t: '2rem' }} />
      </Div>
    </Div>
  );
}

export default ExploreProductBanner;