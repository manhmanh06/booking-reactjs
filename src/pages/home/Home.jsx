import React from 'react';
import Contact from '../../component/ContentHome/Contact';
import Header from '../../component/Header/Header';
import ContentHome from '../../component/ContentHome/ContentHome';
import Footer from '../../component/Footer/Footer';
const Home = () => {
  return (
    <div>
      <Header />
      <ContentHome />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
