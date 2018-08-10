import React from 'react';
import { storiesOf } from '@storybook/react';

import VideoPlayer from './VideoPlayer';
const clips = require('../data/clips.json').clips;

storiesOf('VideoPlayer', module).add('default', () => (
  <VideoPlayer clip={clips[0]} playing={true} visible={true} />
));
