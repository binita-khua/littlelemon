import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
    <Helmet>
        <title>Little Lemon - Fresh and Zesty Eats</title>
        <meta name="description" content="Little Lemon is your destination for fresh and zesty eats. Enjoy our delicious meals and refreshing drinks." />
        <meta property="og:title" content="Little Lemon - Fresh and Zesty Eats" />
        <meta property="og:description" content="Little Lemon is your destination for fresh and zesty eats. Enjoy our delicious meals and refreshing drinks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.littlelemon.com" />
        <meta property="og:image" content="http://www.littlelemon.com/logo.png" />
      </Helmet>
      <header className="App-header">
          <Header />
          <Nav/>
      </header>
      <Main />
      <Footer />
    </>
  );
}

export default App;
