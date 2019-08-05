import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Button,
  Div,
} from 'atomize';

storiesOf('Button', module)
  .add('with text', () => (
    <Button h="4rem" p={{ x : '2rem' }}>
      Hello Button
    </Button>
  ));