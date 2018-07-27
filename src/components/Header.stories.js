import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import Header from './Header';

storiesOf('Header', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => <Header />);
