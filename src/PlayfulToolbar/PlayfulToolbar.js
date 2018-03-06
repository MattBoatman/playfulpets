import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MobileButtons from './MobileButtons';
import ButtonGroup from './ButtonGroup';
import VaccinationPolicy from '../VaccinationPolicy/VaccinationPolicy';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    cursor: 'pointer',
  },
};

const PlayfulToolbar = class extends React.Component {
  state = {
    anchorEl: null,
    width: window.innerWidth,
    vaccination: false,
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  clickServices = () => {
    this.props.history.push('/services');
  };
  clickTitle = () => {
    this.props.history.push('/');
  };

  handleVaccinationClickOpen = () => {
    this.setState({ vaccination: true });
    this.handleClose();
  };

  handleVaccinationClose = () => {
    this.setState({ vaccination: false });
  };

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
          <Toolbar className={classes.flex}>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
              onClick={this.clickTitle}
            >
              Playful Pets
            </Typography>
            {isMobile ? (
              <MobileButtons
                handleClose={this.handleClose}
                handleMenu={this.handleMenu}
                anchorEl={this.state.anchorEl}
                clickServices={this.clickServices}
                clickVaccination={this.handleVaccinationClickOpen}
              />
            ) : (
              <ButtonGroup
                clickServices={this.clickServices}
                clickVaccination={this.handleVaccinationClickOpen}
              />
            )}
          </Toolbar>
        </AppBar>
        <VaccinationPolicy
          open={this.state.vaccination}
          handleClose={this.handleVaccinationClose}
        />
      </div>
    );
  }
};

PlayfulToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(PlayfulToolbar));
