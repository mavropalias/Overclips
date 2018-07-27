import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import Clips from './Clips';
const clips = require('../data/clips.json').clips;

storiesOf('Clips', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => <Clips clips={clips} loadMoreRows={() => {}} />)
  .add('clips=[]', () => <Clips clips={[]} loadMoreRows={() => {}} />)
  .add('clips=null', () => <Clips clips={null} loadMoreRows={() => {}} />)
  .add('no clips prop', () => <Clips loadMoreRows={() => {}} />);
