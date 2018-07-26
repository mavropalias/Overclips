import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Clip from './Clip';
const clips = require('../data/clips.json').clips;

storiesOf('Clip', module).add('Default', () => <Clip clip={clips[0]} />);
