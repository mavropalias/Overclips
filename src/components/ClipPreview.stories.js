import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import ClipPreview from './ClipPreview';
const clips = require('../data/clips.json').clips;

storiesOf('ClipPreview', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('hidden', () => <ClipPreview clip={clips[0]} />)
  .add('visible', () => <ClipPreview isVisible clip={clips[0]} />)
  .add('visible & link', () => (
    <ClipPreview isVisible isLink clip={clips[0]} />
  ));
