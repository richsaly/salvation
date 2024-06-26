import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div>
       <Header />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default Layout;

