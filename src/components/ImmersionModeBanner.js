import React from 'react';

import {
  Div,
  Image,
  Tag,
  Text,
} from 'atomize';


const containerStyle = {
  justify: 'center',
  bgImg: 'https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8e56fe04e6d7_home_immersion_desktop_clear_2x_opt.jpg',
  bgPos: 'center',
  bgSize: 'cover',
  overflow: 'hidden',
  className: 'hero-container',
  id: 'immersion-mode-hero-container',
}

const wrapperStyle = {
  flexDir: { xs: 'column', md: 'row' },
  justify: 'center',
  align: 'center',
  p: { y: '2rem' },
  className: 'hero-wrapper',
  id: 'immersion-mode-hero-wrapper',
}

const contentStyle = {
  d: 'flex',
  flexDir: 'column',
  align: 'center',
  p: {
    y: '2rem',
    x: { xs: '1.5rem', md: '4rem' },
  },
  textColor: 'white',
  className: 'hero-content',
  id: 'immersion-mode-hero-content',
}

const tagStyle = {
  rounded: 'circle',
  bg: 'transparent',
  border: '1px solid',
  borderColor: 'white',
  textColor: 'white',
  textSize: 'body',
  textTransform: 'uppercase',
}

const headerStyle = {
  tag: 'h1',
  textSize: { xs: 'display2', sm: 'display3' },
  p: { y: '2rem' },
}

const bodyStyle = {
  tag: 'p',
  textSize: { xs: 'subheader', md: 'subheader' },
  textAlign: 'center',
  p: {
    x: { lg: '10rem' },
    b: '3rem',
  },
}

const ImmersionModeBanner = () => (
  <Div {...containerStyle}> 
    <Div {...wrapperStyle}>
      <Div {...contentStyle}>
        <Tag  {...tagStyle}>
          Immersion Mode
        </Tag>
        <Text {...headerStyle}>
          Immerse Yourself
        </Text>
        <Text {...bodyStyle}>
          We don’t just hear music - we feel music. The nuraphone delivers bass you can feel, while maintaining crystal clear detail. It works by splitting the melodic sounds to an in-ear speaker, and the bass sounds to an over-ear tactile driver that delivers the sound through your skin.
          <br /><br />
          For the first time you can adjust your level of immersion. Stand at the back of the room, or in the front row.
        </Text>
        <Div d="block" id="phone" m="auto" w="350px" h="544px">
          <Image src="https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5c45089779dc691a2ab5ae49_Iphone_Mockup_WithScreen_C-_1.5x.png" />
        </Div>
      </Div>
    </Div>
  </Div>
)

export default ImmersionModeBanner;