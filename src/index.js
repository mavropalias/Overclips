import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { AWSAppSyncClient } from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import Header from './components/Header';
import './index.css';

import { appSyncConfig } from './AppSync';

const client: AWSAppSyncClient = new AWSAppSyncClient({
  url: appSyncConfig.graphqlEndpoint,
  region: appSyncConfig.region,
  auth: {
    type: appSyncConfig.authenticationType,
    apiKey: appSyncConfig.apiKey
  },
  disableOffline: true
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Rehydrated
        render={({ rehydrated }) => (rehydrated ? <App /> : <Header />)}
      />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
