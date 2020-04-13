import React from 'react';
import PropTypes from 'prop-types';

function SocialLink({ link, content }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}

SocialLink.propTypes = {
  link: PropTypes.any,
  content: PropTypes.any,
};

export default SocialLink;
