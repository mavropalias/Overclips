import React from 'react';
import { storiesOf } from '@storybook/react';

import DataGatherer from './DataGatherer';
const clips = require('../data/clips.json').clips;

storiesOf('DataGatherer', module).add('default', () => (
  <DataGatherer clip={clips[1]} />
));
