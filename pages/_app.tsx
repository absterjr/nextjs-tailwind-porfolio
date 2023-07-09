import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Head from 'next/head';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Aryaman</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
