/* eslint-disable no-unused-vars */
import React from 'react';
import Head from 'next/head';
import Header from './component/Header';
import MainContent from './component/MainContent';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import IntroSection from './component/FilterInfo';

export default function App() {
  return (
    <div>
      <Head>
        <title>Discover Our Products</title>
        <meta name="description" content="Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor." />
      </Head>
      <Header />
      <IntroSection />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
