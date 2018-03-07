import React from 'react';
import PropTypes from 'prop-types';
import './ContentSquare.css';
import Typography from 'material-ui/Typography';

const ContentSquare = props => {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
      }}
      className="contentBlock"
    >
      <Typography
        style={{
          color: props.color,
          fontWeight: 600
        }}
        variant="headline"
        component="h2"
        paragraph
      >
        {props.title}
      </Typography>
      {props.children}
    </div>
  );
};

ContentSquare.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContentSquare;
