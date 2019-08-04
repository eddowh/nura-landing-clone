import React, { Component } from 'react';

import {
  Button,
  Div,
  Text,
} from 'atomize';

import ResponsiveContext from '../contexts/ResponsiveContext';

const backgroundImages = {
  desktop: [
    // blue
    "https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5cda95e5934e9667cc62d325_Loop_presale_homepageexperience_1.3a2.jpg",
    // purple
    "https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5cda95e66d9f353ba4971415_Loop_presale_homepageexperience_1.3a.jpg",
    // red
    "https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5cda95e56d9f358472971413_Loop_presale_homepageexperience_1.3a3.jpg",
  ],
  mobileLandscape: [
    // blue
    "",
    // purple
    "https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5cdb2632bc2719ecea1a49c9_Loop_presale_homepageexperience_1.2mob.jpg",
      // red
    "",
  ],
  mobilePortrait: [
    // blue
    "",
    // purple
    "https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5cda8e3dc90d4392e3552d03_Loop_presale_homepageexperience_1.3.jpg",
    // red
    "",
  ],
}

class ExploreProductBanner extends Component {
  state = {
    activeBgImgIndex: 1,
  }

  componentDidMount () {
    this.cycleBgImgInterval = setInterval(
      () => this.setState(prevState => ({
        // activeBgImgIndex: (prevState.activeBgImgIndex + 1) % 3,
        activeBgImgIndex: (prevState.activeBgImgIndex) % 3,
      })),
      3000,
    );
  }

  componentWilUnmount () {
    clearInterval(this.cycleBgImgInterval);
  }

  getBgImgCoverSrc = (responsiveSize) => {
    if (!responsiveSize) return;
    console.log(responsiveSize);

    let deviceBackgroundImages;
    if (responsiveSize === 'xs' || responsiveSize === 'sm')
      deviceBackgroundImages = backgroundImages.mobilePortrait;
    else if (responsiveSize === 'md')
      deviceBackgroundImages = backgroundImages.mobileLandscape;
    else if (responsiveSize === 'lg' || responsiveSize === 'xl')
      deviceBackgroundImages = backgroundImages.desktop;

    return deviceBackgroundImages[this.state.activeBgImgIndex];
  }

  render () {
    return (
      <ResponsiveContext.Consumer>
      {size => (
        <Div
          d="flex"
          align="center"
          justify="center"
          bg="brand100"
          bgImg={this.getBgImgCoverSrc(size)}
          bgPos="center"
          bgSize="cover"
          className="hero-container" 
          style={{
            /* transition: 'background-image 1s', */
          }}
        >
          <Div
            d="flex"
            flexDir={{ xs: "column", md: "row" }}
            justify="center"
            align="center"
            p={{
              t: { xs: 0, lg: '6rem' },
              b: { xs: '40rem', lg: '6rem' },
            }}
            m="0px"
            maxW="1200px"
            textColor="white"
            className="hero-wrapper"
            id="explore-product-hero-wrapper"
          >
            <Div
              d="flex"
              flexDir="column"
              align="center"
              justify="center"
              w="50vw"
              p={{ y: '2rem', x: { md: '2rem'} }}
              className="hero-content"
              id="explore-product-hero-content"
            >
              <Text
                tag="h1"
                style={{ lineHeight: "80px" }}
                textSize={{ xs: "display2", sm: "display3", md: "hero", lg: "heroLg" }}
              >
                <b>nura</b>phone
                {(size !== 'xs' && size !== 'sm' && size !== 'md') && " — Music in Full Colour."}
              </Text>
              <Text
                tag="p"
                textAlign="left"
                p={{ y: { md: '1.5rem' }}}
                textSize={{ xs: "subheader", md: "subheader", lg: "heading" }}
              >
                {(size === 'xs' || size === 'sm' || size === 'md') && (
                  "Headphones that learn and adapt to your hearing."
                )}
                {(size !== 'xs' && size !== 'sm' && size !== 'md') && (
                  "The nuraphone is the world's only headphone \
                   that automatically learns and adapts to your unique hearing."
                )}
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
            {(size === 'lg' || size === 'xl') && (<Div d="flex" justify="center" w="50vw" p={{ t: '2rem' }} />)}
          </Div>
        </Div>
      )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default ExploreProductBanner;