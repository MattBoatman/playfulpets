import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
const style = {
  buttonGroup: {
    marginLeft: 'auto',
  },
};
const MobileButtons = props => {
  const { handleClose, handleMenu, anchorEl, clickVaccination, clickServices } = props;
  const open = Boolean(anchorEl);
  return (
    <div style={style.buttonGroup} >
      <IconButton
        aria-owns={open ? 'menu-appbar' : null}
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={clickServices}>Services</MenuItem>
        <MenuItem onClick={clickVaccination}>Vaccination Policy</MenuItem>
      </Menu>
    </div>
  );
};

MobileButtons.propTypes = {
  handleClose: PropTypes.func.isRequired,
  clickServices: PropTypes.func.isRequired,
  clickVaccination: PropTypes.func.isRequired,
  handleMenu: PropTypes.func.isRequired,
  anchoEl: PropTypes.object,
};

export default MobileButtons;
