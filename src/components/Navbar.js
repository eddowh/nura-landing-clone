import React from 'react';

import {
  Button,
  Div,
  Icon,
  Image,
  Text,
} from 'atomize';

import navbarLinks from '../data/navbarLinks';

const navbarTextSize = { xs: "subheader", lg: "body", xl: "subheader" };

const Navbar = () => (
  <Div
    d="flex"
    justify="center"
    p={{ x: { xs: '0px', sm: '1rem' }}}
    id="navbar-container"
    pos="sticky"
    w="100%"
    top="0px"
    bg="white"
    style={{ zIndex: 99999 }}
  >
    <Div
      d="flex"
      p={{ xs: "1rem", lg: "0.5rem" }}
      justify="space-between"
      flexDir="row"
      w="100%"
      maxW="1200px"
      bg="white"
      id="navbar-content"
    >
      <Div d="flex" id="navbar-nura-logo-container">
        <Image
          id="navbar-nura-logo"
          src="https://www.nuraphone.com/cdn/5b2c8a9fa49e8e2d4604e60b/5b2c8a9fa49e8e4a4004e64c_brand_desktop.svg"
        />
      </Div>
      <Div
        d={{ xs: "none", lg: "flex" }}
        flexDir="row" align="center"
        id="navbar-links-container"
      >
        {
          navbarLinks.map((item, index) => {
            return (
              <Text
                key={index}
                m={{ x: "8px" }}
                tag="p"
                textSize={navbarTextSize}
                id="navbar-link"
              >
                {item.text}
              </Text>
            )
          })
        }
      </Div>
      <Div
        d="flex" flexDir="row" align="center"
        id="navbar-more-container"
      >
        <Text
          d={{ xs: "none", lg: "flex" }}
          tag="p"
          textSize={navbarTextSize}
        >
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
          id="navbar-more-buy-now-button"
        >
          Buy Now
        </Button>
        <Icon
          d={{ lg: "none" }} name="Menu" color="black" size="24px"
          id="navbar-menu-icon"
        />
      </Div>
    </Div>
  </Div>
);

export default Navbar;