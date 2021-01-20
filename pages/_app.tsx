import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { useApollo } from '@lib/apolloClient';
import 'styles/globals.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const apolloClient: ApolloClient<NormalizedCacheObject> = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
