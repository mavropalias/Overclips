import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { MockedProvider } from 'react-apollo/test-utils';

import QueryClips from './QueryClips';
import { LIST_CLIPS } from '../graphql/ListClips';
const clips = require('../data/clips.json').clips;

const mockBase = {
  request: {
    query: LIST_CLIPS,
    variables: {
      first: 20,
      after: ''
    }
  }
};

const mockData = [
  Object.assign({}, mockBase, {
    result: {
      data: {
        listClips: {
          items: clips,
          nextToken: null
        }
      }
    }
  })
];

const mockLoading = [
  Object.assign({}, mockBase, {
    result: {
      data: {
        listClips: null,
        loading: true
      }
    }
  })
];

const mockError = [
  Object.assign({}, mockBase, {
    error: new Error('Mock error')
  })
];

storiesOf('QueryClips', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <MockedProvider mocks={mockData} addTypename={false}>
      <QueryClips />
    </MockedProvider>
  ))
  .add('loading', () => (
    <MockedProvider mocks={mockLoading} addTypename={false}>
      <QueryClips />
    </MockedProvider>
  ))
  .add('error', () => (
    <MockedProvider mocks={mockError} addTypename={false}>
      <QueryClips />
    </MockedProvider>
  ));
