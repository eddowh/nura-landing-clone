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
    transparent: 'rgba(0, 0, 0, 0.0)'
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
          <Div d="flex">
            <Image src="https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8e4a4004e64c_brand_desktop.svg" w="" />
          </Div>
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

      <Div
        d="flex" justify="center"
        bgImg="https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8e56fe04e6d7_home_immersion_desktop_clear_2x_opt.jpg"
        bgPos="center"
        bgSize="cover"
        overflow="hidden"
        className="hero-container" 
        id="immersion-mode-hero-container"  
      >
        <Div
          d="flex"
          flexDir={{ xs: "column", md: "row" }}
          justify="center"
          align="center"
          p={{ y: "2rem" }}
          maxW="1200px"
          className="hero-wrapper"
          id="immersion-mode-hero-wrapper"
        >
          <Div
            d="flex"
            flexDir="column"
            align="center"
            p={{ y: '2rem', x: { xs: '1.5rem', md: '4rem'} }}
            textColor="white"
            className="hero-content"
            id="immersion-mode-hero-content"
          >
            <Tag rounded="circle" bg="transparent" textColor="white" border="1px solid" borderColor="white" textSize="body" textTransform="uppercase">
              Immersion Mode
            </Tag>
            <Text
              tag="h1"
              p={{ y: '2rem' }}
              textSize={{ xs: "display2", sm: "display3" }}
            >
              Immerse Yourself
            </Text>
            <Text
              tag="p"
              textAlign="center"
              p={{ x: { lg: '10rem' }, b: '3rem' }}
              textSize={{ xs: "subheader", md: "subheader" }}
            >
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

      <Div
        d="flex" justify="center"
        bg="white"
        overflow="hidden"
        className="hero-container"
      >
        <Div
          d="flex"
          flexDir={{ xs: "column", md: "row" }}
          justify="center"
          align="center"
          maxW="1200px"
          className="hero-wrapper"
        >
          <Row
            w="100%"
            m="0px"
            p={{ x: { xs: '1rem' }}}
            justify="center"
            className="footer"
          >
            <Col
              size={{ xs: 12 }}
              border={{ xs: "1px solid", sm: "0px" }}
              borderColor="black"
              className="footer-info-container"
            >
              <Div
                d="flex"
                flexDir="column"
                align="center"
                p={{ y: { xs: '2rem' }}}
              >
                <Text tag="h1" textSize="heading">
                  Newsletter
                </Text>
                <Text
                  tag="p"
                  textAlign="center"
                  textSize={{ xs: "subheader", md: "subheader" }}
                >
                  Sign up to receive latest nura news and upcoming events!
                </Text>
                <Button rounded="circle" bg="black" textColor="white">
                  Submit
                </Button>
              </Div>
            </Col>
            <Col
              size={{ xs: 12 }}
              border={{ xs: "1px solid", sm: "0px" }}
              borderColor="black"
              className="footer-info-container"
            >
              <Div
                d="flex"
                flexDir="column"
                align="center"
                p={{ y: { xs: '1rem' }}}
              >
                <Text tag="p" textSize="subheader">
                  Contact
                </Text>
                <Text tag="p" textSize="subheader">
                  Press
                </Text>
                <Text tag="p" textSize="subheader">
                  Our Team
                </Text>
                <Text tag="p" textSize="subheader">
                  Patents
                </Text>
                <Text tag="p" textSize="subheader">
                  Upgrades
                </Text>
                <Text tag="p" textSize="subheader">
                  Find a Store
                </Text>
              </Div>
            </Col>
            <Col
              size={{ xs: 12 }}
              border={{ xs: "1px solid", sm: "0px" }}
              borderColor="black"
              className="footer-info-container"
            >
              <Div
                d="flex"
                flexDir="column"
                align="center"
                p={{ y: { xs: '1rem' }}}
              >
                <Text tag="p" textSize="subheader">
                  Follow Us
                </Text>
                <Div d="flex" flexDir="row">
                  <Div>Facebook</Div>
                  ---
                  <Div>Instagram</Div>
                  ---
                  <Div>Twitter</Div>
                  ---
                  <Div>Youtube</Div>                  
                </Div>
              </Div>
            </Col>
          </Row>
        </Div>
      </Div>
    </ThemeProvider>
  );
}

export default App;
