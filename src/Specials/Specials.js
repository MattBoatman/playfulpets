import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import SpecialInfomation from './SpecialInfomation';
import './Specials.css';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class Specials extends React.Component {
  state = {
    open: true,
    showMoreInformation: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleLearnMore = () => {
    this.setState({ showMoreInformation: true });
    this.handleClose();
  };

  handleMoreInformationClose = () => {
    this.setState({ showMoreInformation: false });
  };
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <SpecialInfomation
          open={this.state.showMoreInformation}
          handleClose={this.handleMoreInformationClose}
        />
        <Snackbar

          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
            id:"specials"
          }}
          message={
            <span id="message-id">
              We are running some specials this month!
            </span>
          }
          action={[
            <Button
              key="undo"
              color="inherit"
              size="small"
              onClick={this.handleLearnMore}
            >
              Learn More
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

Specials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Specials);
