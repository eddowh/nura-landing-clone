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
        className="navbar"
        p={{ x: { xs: '0px', sm: '1rem' }}}
      >
        <Div
          d="flex"
          p={{ sm: "1rem", lg: "0.5rem" }}
          justify="space-between"
          flexDir="row"
          w="100%"
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
    </ThemeProvider>
  );
}

export default App;
