import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

const style = {
  buttonGroup: {
    marginLeft: 'auto',
  },
};
const ButtonGroup = props => {
  return (
    <div style={style.buttonGroup}>
      <Button color="inherit" onClick={props.clickServices}>
        Services
      </Button>
      <Button color="inherit" onClick={props.clickVaccination}>Vaccination Policy</Button>
    </div>
  );
};

ButtonGroup.propTypes = {
  clickServices: PropTypes.func.isRequired,
  clickVaccination: PropTypes.func.isRequired,
};

export default ButtonGroup;
