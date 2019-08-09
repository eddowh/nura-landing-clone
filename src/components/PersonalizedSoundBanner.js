import React, { Component } from 'react';

import {
  Div,
  Tag,
  Text,
} from 'atomize';

import ResponsiveContext from '../contexts/ResponsiveContext';
import SoundPersonalizationImages from './SoundPersonalizationImages';

class PersonalizedSoundBanner extends Component {
  render () {
    return (
      <ResponsiveContext.Consumer>
      {size => (
        <Div
          d="flex" justify="center"
          bg="gray100"
          className="hero-container" 
          overflow="hidden"
        >
          <Div
            d="flex"
            flexDir={{ xs: "column", md: "row" }}
            justify="center"
            align="center"
            p={{ t: "2rem" }}
            maxW="1200px"
            className="hero-wrapper"
          >
            <Div
              d="flex"
              flexDir="column"
              align="center"
              p={{ t: '2rem', x: { xs: '1.5rem', md: '4rem'} }}
              className="hero-content"
            >
              <Tag rounded="circle" bg="brand100" textColor="white" textSize="body" textTransform="uppercase">
                Personalized Sound
              </Tag>
              <Text
                tag="h1"
                p={{ y: '2rem' }}
                textSize={{ xs: "display2", sm: "display3" }}
              >
                The difference is you
              </Text>
              <Text
                tag="p"
                textAlign="center"
                p={{ x: { lg: '10rem' }, b: '3rem' }}
                textSize={{ xs: "subheader", md: "subheader" }}
              >
                If you asked us to make you the perfect headphones we would start by measuring your hearing.
                That's because we all hear differently, and this difference is far greater than you realise.
              </Text>

              <SoundPersonalizationImages />
            </Div>
          </Div>
        </Div>      
      )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default PersonalizedSoundBanner;