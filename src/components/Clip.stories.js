import React from 'react';
import { storiesOf } from '@storybook/react';
import { MockedProvider } from 'react-apollo/test-utils';

import { GET_CLIP } from '../graphql/GetClip';
import Clip from './Clip';
const clips = require('../data/clips.json').clips;

const mockBase = {
  request: {
    query: GET_CLIP,
    variables: {
      pk: 'feed',
      sk: '1533869639'
    }
  }
};

const mockData = [
  Object.assign({}, mockBase, {
    result: {
      data: {
        getClip: clips[0]
      }
    }
  })
];

const mockError = [
  Object.assign({}, mockBase, {
    error: new Error('Mock error')
  })
];

storiesOf('Clip', module)
  .add('default', () => (
    <MockedProvider mocks={mockData} addTypename={false}>
      <Clip
        match={{
          params: {
            id: '1533869639'
          }
        }}
      />
    </MockedProvider>
  ))
  .add('error', () => (
    <MockedProvider mocks={mockError} addTypename={false}>
      <Clip
        match={{
          params: {
            id: '1533869639'
          }
        }}
      />
    </MockedProvider>
  ));
