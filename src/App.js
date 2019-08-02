import React from 'react';
import { ThemeProvider, DefaultTheme, StyleReset } from 'atomize';
import {
  Button,
  Container,
  Col,
  Div,
  Icon,
  Image,
  Row,
  Tag,
  Text,
} from 'atomize';

import logo from './logo.svg';
import './App.css';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
    brand100: '#da4370',
    brand200: '#a22a4d',
  },
  textSize: {
    ...DefaultTheme.textSize,
    size: {
      ...DefaultTheme.textSize.size,
      hero: '72px',
      heroLg: '96px',
    }
  }
};

const navbarLinks = [
  {
    text: "Nuraphone",
    link: "",
  },
  {
    text: "NuraLoop",
    link: "",
  },
  {
    text: "How It Works",
    link: "",
  },
  {
    text: "Accessories",
    link: "",
  },
  {
    text: "Try / Buy",
    link: "",
  },
  {
    text: "Backstage",
    link: "",
  },
];

const soundPersonalizationProfiles = [
  {
    "personImage": "https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8ed6a804e6ce_Person1_940px_CL.jpg",
    "soundProfileImage": "https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5bcfb6e378fcc534d9345643_Graph1.png",
  },
  {
    "personImage": "https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8e7e3a04e6d3_Person2_940px_CL.jpg",
    "soundProfileImage": "https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5bcfb6e3ae57fd2578c858dc_Graph2.png",
  },
  {
    "personImage": "https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8e652a04e6d4_Person3_940px_CL.jpg",
    "soundProfileImage": "https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5bcfb6e398833e6608ddc4f1_Graph3.png",
  },
]

const App = () => {
  const navbarTextSize = { xs: "subheader", lg: "body", xl: "subheader" };
  const profile = soundPersonalizationProfiles[0];

  return (
    <ThemeProvider theme={theme}>
      <StyleReset />

      <Div
        d="flex"
        justify="center"
        p={{ x: { xs: '0px', sm: '1rem' }}}
        className="navbar"
      >
        <Div
          d="flex"
          p={{ xs: "1rem", lg: "0.5rem" }}
          justify="space-between"
          flexDir="row"
          w="100%"
          maxW="1200px"
          bg="white"
        >
          <Image src="https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8e4a4004e64c_brand_desktop.svg" w="" />
          <Div
            d={{ xs: "none", lg: "flex" }}
            flexDir="row" align="center"
          >
            {
              navbarLinks.map((item, index) => {
                return (
                  <Text
                    key={index}
                    m={{ x: "8px" }}
                    tag="p"
                    textSize={navbarTextSize}
                  >
                    {item.text}
                  </Text>
                )
              })
            }
          </Div>
          <Div d="flex" flexDir="row" align="center">
            <Text d={{ xs: "none", lg: "flex" }} tag="p" textSize={navbarTextSize} >
              Support
            </Text>
            <Button
              d={{ xs: "none", md: "flex" }}
              p={{ x: "1rem" }}
              h="36px"
              textSize={navbarTextSize}
              textColor="white"
              hoverTextColor="info900"
              bg="brand100"
              hoverBg="info200"
              border="1px solid"
              borderColor="brand200"
              hoverBorderColor="info900"
              m={{ x: ".75rem" }}
            >
              Buy Now
            </Button>
            <Icon d={{ lg: "none" }} name="Menu" color="black" size="24px" />
          </Div>
        </Div>
      </Div>

      <Div d="flex" justify="center" className="hero-container" bg="brand100">
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
              <Button w={{ xs: '85%', md: '70%' }} textSize="subheader">
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
            w="50vw"
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
        >
          <Div
            d="flex"
            flexDir="column" 
            align="center"
            w="50vw"
            p={{ y: '2rem', x: { md: '1rem'} }}
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
              <Button w={{ xs: '85%', md: '70%' }} textSize="subheader">
                Discover more
              </Button>
            </Div>
          </Div>
          <Div d="flex" justify="center" w="50vw" p={{ t: '2rem' }} />
        </Div>
      </Div>

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
            align="center"
            maxW="600px"
            p={{ y: '2rem', x: { xs: '1rem', md: '1rem'} }}
          >
            <Text
              tag="h1"
              textSize={{ xs: "display2", sm: "display3" }}
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
              <Button textSize="subheader">
                Find out more about SoundStudio™ >
              </Button>
            </Div>
          </Div>
          <Div d="flex" justify="center" w="50vw" p={{ t: '2rem' }} />
        </Div>
      </Div>

      <Div
        d="flex" justify="center"
        bg="gray100"
        className="hero-container" 
      >
        <Div
          d="flex"
          flexDir={{ xs: "column", md: "row" }}
          justify="center"
          align="center"
          p={{ y: "2rem" }}
          maxW="1200px"
          className="hero-wrapper"
        >
          <Div
            d="flex"
            flexDir="column"
            align="center"
            p={{ y: '2rem', x: { xs: '1.5rem', md: '4rem'} }}
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
            <Row w='100%' align="center">
              <Col size={6}>
                <Div d="flex">
                  <Image src={profile.personImage} />
                </Div>
              </Col>
              <Col size={6}>
                <Div d="flex">
                  <Image src={profile.soundProfileImage} />
                </Div>
              </Col>
            </Row>
          </Div>
        </Div>
      </Div>
    </ThemeProvider>
  );
}

export default App;
