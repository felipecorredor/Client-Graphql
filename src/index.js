import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import clientApollo from './clientApollo';
import { ApolloProvider } from '@apollo/client';

ReactDOM.render(
  <ApolloProvider client={clientApollo}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);