import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Routers from '../../router/Routers';

const Layout = () => {
  const location = useLocation();

  // Check if the current path is '/admin'
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}
      <Routers />
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default Layout;
