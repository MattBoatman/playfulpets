import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  wrapper: {
    width: '100%'
  }
};
const Avatar = props => {
  return <img style={styles.wrapper} src={props.imageURL} alt="Playful Pets" />;
};

Avatar.propTypes = {
  imageURL: PropTypes.string.isRequired
};

export default Avatar;
