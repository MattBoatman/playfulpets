import React from 'react';
import PropTypes from 'prop-types';
import './ContentSquare.css';
import Typography from 'material-ui/Typography';

const ContentSquare = props => {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
      }}
      className="contentBlock"
    >
      <Typography
        style={{
          color: props.color,
        }}
        variant="headline"
        component="h3"
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
