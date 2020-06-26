import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ news }) {
  return <h1>Main Component</h1>;
}

Home.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    }),
  ).isRequired,
};
