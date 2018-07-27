import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => <Button>Sample text</Button>)
  .add('secondary', () => <Button secondary>Secondary button</Button>)
  .add('icon', () => (
    <Button icon>
      <FontAwesomeIcon icon={faTwitter} />
    </Button>
  ))
  .add('secondary + icon', () => (
    <Button secondary icon>
      <FontAwesomeIcon icon={faTwitter} />
    </Button>
  ));
