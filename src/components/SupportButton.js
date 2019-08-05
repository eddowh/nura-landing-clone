import React from 'react';

import { Button, Icon } from 'atomize';

const SupportButton = () => (
  <Button
    prefix={
      <Icon name="Message" color="white" size="24px" m={{ r: '0.5rem' }} />
    }
    pos="fixed" bottom="1rem" right="1rem"
    rounded="circle"
    bg="support"
    shadow="3" hoverShadow="4"
    textSize="subheader"
    textWeight="800"
    p={{ x: '1.5rem' }} h="3rem"
    style={{ zIndex: 9999 }}
  >
    Support
  </Button>
);

export default SupportButton;