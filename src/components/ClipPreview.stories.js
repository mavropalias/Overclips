import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import ClipPreview from './ClipPreview';
const clips = require('../data/clips.json').clips;

storiesOf('ClipPreview', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('hidden', () => <ClipPreview showMockDate clip={clips[0]} />)
  .add('visible', () => <ClipPreview showMockDate isVisible clip={clips[0]} />)
  .add('visible & link', () => (
    <ClipPreview showMockDate isVisible isLink clip={clips[0]} />
  ));
