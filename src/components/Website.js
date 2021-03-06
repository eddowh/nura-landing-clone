import React from 'react';

import {
  Button,
  Col,
  Div,
  Icon,
  Image,
  Input,
  Row,
  Tag,
  Text,
} from 'atomize';

import '../App.css';
import './Website.css';


import SupportButton from './SupportButton';
import Navbar from './Navbar';
import ExploreProductBanner from './ExploreProductBanner';
import PersonalizedSoundBanner from './PersonalizedSoundBanner';
import UserReviewsBanner from './UserReviewsBanner';
import ImmersionModeBanner from './ImmersionModeBanner';


const Website = () => {
  return (
    <React.Fragment>
      <SupportButton />
      <Navbar />

      <Div d="flex" justify="center" className="hero-container"
        bgImg="https://assets.website-files.com/5b2c8a9fa49e8e2d4604e60b/5cdd0eb8ee894c2a5cad42eb_Group%202.jpg"
        bgSize="cover"
      >
        <Div
          d="flex"
          flexDir={{ xs: "column", md: "row-reverse" }}
          justify="center"
          align="center"
          p="0px"
          maxW="1200px"
        >
          <Div
            d="flex"
            flexDir="column" 
            align="center"
            w="50vw"
            p={{ y: '2rem', x: { md: '3.5rem'} }}
            textColor="white"
          >
            <Text
              tag="h1"
              textSize={{ xs: "display2", sm: "display3", md: "hero", lg: "heroLg" }}
            >
              <b>nura</b>now
            </Text>
            <Text
              tag="p"
              textAlign="center"
              p={{ y: { md: '1.5rem' }}}
              textSize={{ xs: "subheader", md: "subheader", lg: "heading" }}
            >
              Get the Nuraphone now from just $9/mth.
            </Text>
            <Div d="flex" m={{ t: "1rem" }} justify="center" w='100%'>
              <Button
                w={{ xs: '85%', md: '70%' }}
                textSize="subheader"
                bg="transparent"
                border="1px solid"
                borderColor="white"
              >
                Discover more
              </Button>
            </Div>
          </Div>
          <Div d="flex" justify="center" w="50vw" p={{ t: '2rem' }}>
            <Image
              w={{ xs: '85%', md: '75%' }}
              src="https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5cdd0eb8ee894c27ccad42e8_CrossSell_Bhavna_x2.png"
            />
          </Div>
        </Div>
      </Div>

      <Div d="flex" justify="center" className="hero-container" bg="black">
        <Div
          d="flex"
          flexDir={{ xs: "column", md: "row-reverse" }}
          justify="center"
          align="center"
          p={{ y: "6rem" }}
          maxW="1200px"
        >
          <Div
            d="flex"
            flexDir="column" 
            align="center"
            w="55vw"
            p={{ y: '2rem', x: { md: '3.5rem'} }}
            textColor="white"
          >
            <Text
              tag="p"
              textAlign="center"
              textSize={{ xs: "subheader", md: "heading" }}
            >
              Limited pre-order
            </Text>
            <Text
              tag="h1"
              textSize={{ xs: "display2", sm: "display3", md: "hero", lg: "heroLg" }}
            >
              <b>nura</b>loop
            </Text>
            <Text
              tag="p"
              textAlign="center"
              p={{ y: { md: '2rem' }}}
              textSize={{ xs: "subheader", md: "subheader", lg: "heading" }}
            >
              The world's smartest earphones.
              <br />
              Pre-order NuraLoop now.
            </Text>
            <Div d="flex" m={{ t: "1rem" }} justify="center" w='100%'>
              <Button
                w={{ xs: '85%', md: '70%' }}
                textSize="subheader"
                border="1px solid" borderColor="white"
              >
                Discover more
              </Button>
            </Div>
          </Div>
        </Div>
      </Div>

      <ExploreProductBanner />

      <Div
        d="flex" justify="center"
        bg="brand100"
        bgImg="https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5bbef52d837d9848e31d9f92_TryBuyHomepageBanner_01_x2.jpg"
        bgPos="center"
        bgSize="cover"
        className="hero-container" 
        id="new-product-hero-container"
      >
        <Div
          d="flex"
          flexDir={{ xs: "column", md: "row" }}
          justify="flex-start"
          align="flex-start"
          p={{ y: "2rem" }}
          maxW="1200px"
          className="hero-wrapper"
          id="new-product-hero-wrapper"
        >
          <Div
            d="flex"
            flexDir="column"
            align="flex-start"
            maxW="600px"
            textColor="white"
            p={{ y: '2rem', x: { xs: '1rem', md: '2rem'} }}
          >
            <Text
              tag="h1"
              textAlign="left"
              textSize={{ xs: "heading", sm: "heading" }}
            >
              Introducing — SoundStudio™
            </Text>
            <Text
              tag="p"
              textAlign="left"
              p={{ y: { md: '1.5rem' }}}
              textSize={{ xs: "subheader", md: "subheader" }}
            >
              Join us at SoundStudio™ for an opportunity to try and buy
              the nuraphone and discover Music in Full Colour™.
            </Text>
            <Div d="flex" m={{ t: "1rem" }} justify="flex-start" w='100%'>
              <Button bg="transparent" textSize="subheader"
                p={{ x: "1.5rem" }} h="3rem"
                border="1px solid" borderColor="white"
              >
                Find out more about SoundStudio™ >
              </Button>
            </Div>
          </Div>
          <Div d="flex" justify="center" w="50vw" p={{ t: '2rem' }} />
        </Div>
      </Div>

      <PersonalizedSoundBanner />
      <UserReviewsBanner />
      <ImmersionModeBanner />

      <Div
        d="flex" justify="center"
        bg="footer"
        overflow="hidden"
        className="footer-container"
      >
        <Div
          d="flex"
          justify="center"
          align="center"
          w="100%"
          maxW="1200px"
          p={{ y: { xs : '2rem', sm: '3rem' }}}
          className="footer-wrapper"
        >
          <Row
            w="100%"
            m="0px"
            p={{ x: { xs: '1rem' }}}
            justify="center"
            flexDir="row-reverse"
            className="footer"
            textColor="white"
          >
            <Col
              size={{ xs: 12, sm: 6 }}
              border={{ xs: "1px solid", sm: "0px" }}
              borderColor="white"
              className="bottom-border-only"
            >
              <Div
                d="flex"
                flexDir="column"
                align={{ xs: 'center', sm: 'flex-start' }}
                p={{ b: { xs: '2rem', sm: '0px' }}}
              >
                <Text tag="h1" textSize="heading">
                  Newsletter
                </Text>
                <Text
                  tag="p"
                  d={{ sm: 'none' }}
                  textAlign={{ xs: 'center', sm: 'left' }}
                  textSize={{ xs: "subheader", md: "subheader" }}
                >
                  Sign up to receive latest nura news and upcoming events!
                </Text>
                <Input
                  placeholder="Sign up to receive latest nura news and upcoming events!"
                  m={{ y: { xs: '1rem', sm: '0.5rem' } }}
                />
                <Button w='50%' rounded="circle" bg="footerContrast" textColor="white">
                  Submit
                </Button>
                <br />
                <Text tag="p" textSize="subheader">
                  Follow Us
                </Text>
                <Div d="flex" flexDir="row">
                  {
                    ["Facebook", "Instagram", "Twitter", "Youtube"].map((text, index) => (
                      <Text
                        key={index}
                        tag="p"
                        textSize="body"
                        p={{ r: '0.5rem' }}
                      >
                        {text}
                      </Text>
                    ))
                  }
                </Div>
              </Div>
            </Col>

            <Col
              size={{ xs: 12, sm: 3 }}
              border={{ xs: "1px solid", sm: "0px" }}
              borderColor="white"
              className="bottom-border-only"
            >
              <Div
                d="flex"
                flexDir="column"
                align={{ xs: 'center' , sm: 'flex-start' }}
                h="100%"
                justify={{ sm: 'space-between' }}
                p={{ y: { xs: '1rem', sm: '0px' }}}
              >
                {
                  ["Contact", "Press", "Our Team", "Patents", "Upgrades", "Find a Store"].map((text, index) => (
                    <Text key={index} tag="p" textSize="subheader">
                      {text}
                    </Text>
                  ))
                }
              </Div>
            </Col>

            <Col d={{ xs: 'none', sm: 'flex' }} size={{ sm: 3 }}>
              <Div>
                <Image w="65%" src="https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5bcfc426ae57fdf2a4c86af7_nura-white.png"/>
              </Div>
            </Col>

            <Col d={{ sm: 'none' }} size={{ xs: 12 }}>
              <Div
                d="flex"
                flexDir="column"
                align="center"
                p={{ t: { xs: '1rem' }}}
              >
                <Text tag="p" textSize="subheader">
                  Follow Us
                </Text>
                <Div d="flex" flexDir="row">
                  {
                    ["Facebook", "Instagram", "Twitter", "Youtube"].map((text, index) => (
                      <Text
                        key={index}
                        tag="p"
                        textSize="body"
                        p={{ x: '0.5rem' }}
                      >
                        {text}
                      </Text>
                    ))
                  }
                </Div>
              </Div>
            </Col>
          </Row>
        </Div>
      </Div>

      <Div
        d="flex" justify="center"
        bg="footerContrast"
        className="copyright-container"
      >
        <Div
          d="flex"
          w='100%'
          flexDir={{ xs: 'column', xl: 'row' }}
          justify="space-between"
          align="center"
          maxW="1200px"
          p={{ y: { xs : '2rem' }}}
          textColor="footer"
          className="copyright-wrapper"
        >
          <Text
            tag="p" textSize="body"
            p={{ b: { xs: '0.5rem', xl: '0px' } }}
          >
            Copyright © 2019 Nura Operations Pty Ltd. All rights reserved.
          </Text>
          <Div d="flex" flexDir="row">
            {
              ["Warranty", "Return & Refund Policy", "Privacy", "Terms of Sale"].map((text, index) => (
                <Text
                  key={index}
                  tag="p"
                  textSize="body"
                  p={{ x: '0.5rem' }}
                >
                  {text}
                </Text>
              ))
            }
          </Div>
        </Div>
      </Div>
    </React.Fragment>
  );
}

export default Website;
