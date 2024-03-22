import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
