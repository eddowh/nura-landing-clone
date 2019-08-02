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

const App = () => {
  const navbarTextSize = { xs: "subheader", lg: "body", xl: "subheader" };

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
          bg="gray500"
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

      <Div d="flex" justify="center" className="hero-container" bg="brand100">
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
              <Button w={{ xs: '85%', md: '70%' }} textSize="subheader">
                Discover more
              </Button>
            </Div>
          </Div>
        </Div>
      </Div>
    </ThemeProvider>
  );
}

export default App;
