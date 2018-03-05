import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MobileButtons from './MobileButtons';
import ButtonGroup from './ButtonGroup';

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
  },
};

const PlayfulToolbar = class extends React.Component {
  state = {
    anchorEl: null,
    width: window.innerWidth,
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const isMobile = this.state.width <= 700;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Playful Pets
            </Typography>
            {isMobile ? (
              <MobileButtons
                handleClose={this.handleClose}
                handleMenu={this.handleMenu}
                anchorEl={this.state.anchorEl}
              />
            ) : (
              <ButtonGroup />
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};

PlayfulToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayfulToolbar);
