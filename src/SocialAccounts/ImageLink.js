import React from 'react';
import PropTypes from 'prop-types';
const styles = {
  wrapper: {
    cursor: 'pointer',
    padding: 8,
  },
  image: {
    width: 40,
    height: 40
  }
};
const ImageLink = props => {
  return (
    <a style={styles.wrapper} href={props.href} target="_blank">
      <img alt="Social Accounts" style={styles.image} src={props.image} />
    </a>
  );
};

ImageLink.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ImageLink;
