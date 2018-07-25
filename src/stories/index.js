import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import App from '../App';
import { Header } from '../components/Header';
import Clip from '../components/Clip';
import Hero from '../components/Hero';

const clips = require('../data/clips.json').clips;

storiesOf('App', module).add('Home page', () => <App />);
storiesOf('Header', module).add('Default', () => <Header />);

storiesOf('Clip', module).add('Default', () => <Clip clip={clips[0]} />);
storiesOf('Hero', module).add('D.Va', () => <Hero hero="Dva" />);
