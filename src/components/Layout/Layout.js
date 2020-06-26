import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/index';
import Footer from '../Footer/index';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
