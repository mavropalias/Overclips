import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { MockedProvider } from 'react-apollo/test-utils';

import App from './App';
import { GET_CLIP } from './graphql/GetClip';
const clips = require('./data/clips.json').clips;

const mockBase = {
  request: {
    query: GET_CLIP,
    variables: {
      pk: 'feed',
      sk: '1532653938'
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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <MockedProvider mocks={mockData} addTypename={false}>
        <App />
      </MockedProvider>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
